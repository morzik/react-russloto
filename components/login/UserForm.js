import React from "react";
import Form from "../form/Form";
import {useDispatch} from "react-redux";
import {clearError, useUser} from "../../redux/reducer/user";

const UserForm = ({children, action, form, ...args}) => {
  const dispatch = useDispatch();
  const user = useUser();

  const onSubmit = (data) => {
    dispatch(action(data));
  };

  return (
    <Form
      {...args}
      form={form}
      onSubmit={onSubmit}
      errors={{
        clearError(payload) {
          dispatch(clearError(payload))
        },
        errors: user?.error?.fields
      }}
    >
      {children}
    </Form>
  );
};

export default UserForm;
