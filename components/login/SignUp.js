import React from "react";
import LabelInput from "../form/LabelInput";
import Select from "../form/Select";
import Checkbox from "../form/Checkbox";
import {signUp} from "../../redux/reducer/user";
import UserForm from "./UserForm";
import {useForm} from "react-hook-form";
import {required, email} from "../../constants/form";

const SignUp = (args) => {
  const form = useForm();
  return (
    <UserForm form={form} action={signUp} {...args}>
      <LabelInput
        name="first_name"
        label="Имя: "
        defaultValue="Имя"
        register={required("Имя")}
      />
      <br/>
      <LabelInput
        name="last_name"
        label="Фамилия: "
        defaultValue="Фамилия"
        register={required("Фамилия")}
      />
      <br/>
      <LabelInput
        name="email"
        label="E-mail: "
        defaultValue="asd@asd.as"
        register={email("E-mail")}
      />
      <br/>
      <LabelInput
        name="password"
        type="password"
        label="Пароль: "
        defaultValue="1"
        register={required("Пароль")}
      />
      <br/>
      <LabelInput
        name="password_repeat"
        type="password"
        label="Ещё раз пароль: "
        defaultValue="1"
        register={{
          ...required("Пароль"),
          validate: value => value === form.getValues("password") || "Введенные пароли не совпадают"
        }}
      />
      <br/>
      <Select
        name="gender"
        label="Пол: "
        options={[
          {label: "Жен", value: 1},
          {label: "Муж", value: 2},
          {label: "другое", value: 3}
        ]}
      />
      <br/>
      <Checkbox
        labelAs={<>Согласен с <a href='#'>политикой безопасности</a>:</>}
        name="agreement"
        defaultChecked
        value={1}
        register={required({"message": "Необходимо согласиться с политикой безопасности"})}
      />
      <br/>
      <button type="submit">Отправить</button>
    </UserForm>
  );
};

export default SignUp;
