import React, {useRef} from "react";
import LabelInput from "../form/LabelInput";
import {required} from "../../constants/form";
import Form from "../form/Form";
import {post} from "../../utils/api/api";

const PasswordRestore = (args) => {
  const onSubmit = useRef((data) => {
    post("/user/password-restore", data);
  });
  return (
    <Form onSubmit={onSubmit.current}>
      <LabelInput
        name="email"
        label="email: "
        defaultValue="asd@asd.as"
        register={required("e-mail")}
      />
      <br />
      <button type="submit">Отправить</button>
    </Form>
  );
};

export default PasswordRestore;
