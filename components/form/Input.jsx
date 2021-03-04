import React, {
  cloneElement,
  createElement,
  Fragment,
  isValidElement
} from "react";
import * as PropTypes from "prop-types";

export default function Input({
                                as = "input",
                                children,
                                register,
                                error,
                                name,
                                ...rest
                              }) {
  const props = { name, ref: register, ...rest };
  return (
    <Fragment>
      { isValidElement(as) ? cloneElement(as, props) : createElement(as, props) }
      { error }
      { children }
    </Fragment>
  );
}

Input.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element
  ]),
  children: PropTypes.node,
  register: PropTypes.func,
  error: PropTypes.object,
  name: PropTypes.string.isRequired
};
