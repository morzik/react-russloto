import React, { Fragment, forwardRef, useImperativeHandle, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import * as PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const renderMultipleErrors = ({ message, messages }) => {
  messages = messages || [message]; //todo: сделать через if?
  return (
    messages &&
    Object.entries(messages).map(([type, message]) => (
      <Fragment key={ type }>
        <br/>
        { message }
      </Fragment>
    ))
  );
};

const Form = forwardRef(
  (
    {
      as = "form",
      useFormProps,
      errors: externalErrors,
      isLocalErrors = true,
      isGlobalErrors = false,
      children,
      onWatch,
      onValidation,
      onError,
      onSubmit,
      form,
      ...rest
    },
    ref
  ) => {
    const f = useForm(useFormProps);
    const { errors, setError, register, watch, handleSubmit, trigger, reset, formState } = form || f;

    const result = watch();

    useDeepCompareEffect(() => {
      onWatch && onWatch(result);
    }, [onWatch, result]);

    useEffect(() => {
      if (onValidation) {
        onValidation(formState.isValid);
      }
    }, [onValidation, formState]);

    useDeepCompareEffect(() => {
      if (onError) {
        const plainErrors = JSON.stringify(errors, (key, value) => {
          if (value instanceof HTMLElement) return undefined;
          return value;
        });
        onError(JSON.parse(plainErrors), errors);
      }
    }, [onError, errors]);
    useImperativeHandle(
      ref,
      () => ({
        setError,
        reset,
        trigger
      }),
      [setError, reset, trigger]
    );
    let newChildren = React.Children.map(
      children,
      (child) => (
        child && child.props && child.props.name
          ? React.createElement(child.type, {
            ...child.props,
            onChange: (e) => {
              externalErrors?.clearError(child.props.name);
              if (typeof child.props.onChange === "function") {
                child.props.onChange.call(this, e);
              }
            },
            register: child.props.register
              ? register(child.props.register)
              : register,
            key: child.props.name,
            error: isLocalErrors
              ? child.props.error || (
                <ErrorMessage
                  name={child.props.name}
                  errors={
                    externalErrors?.errors?.[child.props.name]
                      ? externalErrors.errors
                      : errors
                  }
                  render={renderMultipleErrors}
                />
              )
              : null
          })
          : child
      )
    );
    if (isGlobalErrors) {
      newChildren = newChildren.concat(
        newChildren
          .filter((child) => child.props && child.props.name)
          .map(
            ({ props: { error, name } }) =>
              error || (
                <ErrorMessage
                  name={ name }
                  errors={ errors }
                  key={ name }
                  render={ renderMultipleErrors }
                />
              )
          )
      );
    }

    const props = {
      ...rest,
      children: newChildren,
      onSubmit: onSubmit ? handleSubmit(onSubmit) : handleSubmit(() => {
      })
    };
    return React.isValidElement(as)
      ? React.cloneElement(as, props)
      : React.createElement(as, props);
  }
);

Form.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element
  ]),
  isLocalErrors: PropTypes.bool,
  isGlobalErrors: PropTypes.bool,
  /**
   *  параметры хука useForm для react-hook-form
   */
  useFormProps: PropTypes.object,
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
  onWatch: PropTypes.func,

  errors: PropTypes.object,
  children: PropTypes.array,
  onValidation: PropTypes.func,
  form: PropTypes.object,
};
Form.displayName = "Form";
export default Form;
