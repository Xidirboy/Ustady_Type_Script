import React from "react";
import styled from "styled-components";
import InputUi from "../../formSections/InputUi";
import { Btn } from "../../../styleComponents/GlobalStyle";
import { userIcon } from "../../../assets/authIcons";
const AuthStyle = styled.div``;
const SignUp = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <AuthStyle>
      <form onSubmit={onSubmit}>
        <InputUi label="ФИО" placeholder="ФИО" icon={userIcon}/>
        <InputUi
          label="Введите номер телефона"
          placeholder="+998 -- --- -- --"
          mask="+998 nn nnn nn nn"
        />
        <InputUi
          label="Придумайте пароль"
          placeholder="Пароль"
          type="password"
        />
        <Btn>Login</Btn>
      </form>
    </AuthStyle>
  );
};

export default SignUp;
