import React, { useState } from "react";
import InputUi from "../../formSections/InputUi";
import { Btn } from "../../../styleComponents/GlobalStyle";
import { lockIcon, phoneIcon, userIcon } from "../../../assets/authIcons";
import { AuthStyle } from "./AuthStyle";
import PinInputUi from "../../formSections/PinInputUi";
import Axios from "../../../utils/httpClient";
import { useDispatch } from "react-redux";
const AcceptSms = ({ setAction }) => {
  const dispatch = useDispatch();
  const [sdata, setSdata] = useState({});
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onCheckSmsCode = (sms_code) => {
    dispatch({ type: "SET_LOADING", payload: true });
    let tt = true,
      err = {};
    if (tt) {
      Axios()
        .post(`api/v1/auth/accept`, { name: "", sms_code: sms_code })
        .then((r) => {
          setStep(2);
        })
        .catch((e) => {})
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        });
    } else {
      setErrors({ ...errors, ...err });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
  return (
    <AuthStyle>
      <form onSubmit={onSubmit}>
        <PinInputUi
          value={sdata?.sms_code}
          onChange={(e) => {
            console.log(e);
            setSdata({ ...sdata, sms_code: e });
            if (e?.length === 4) {
              onCheckSmsCode(e);
            }
          }}
        />
        {step > 1 ? (
          <>
            <InputUi
              label="Введите новый пароль"
              placeholder="Пароль"
              type="password"
              icon={lockIcon}
              name="password"
              value={sdata?.password}
              is_error={errors?.password}
              onChange={(e) => {
                setSdata({
                  ...sdata,
                  [e?.target?.name]: e?.target?.value,
                  common: "",
                });
                setErrors({
                  ...errors,
                  [e?.target?.name]: false,
                  common: "",
                });
              }}
            />
            <InputUi
              label="Повторите пароль"
              placeholder="Пароль"
              type="password"
              icon={lockIcon}
              name="password"
              value={sdata?.password}
              is_error={errors?.password}
              onChange={(e) => {
                setSdata({
                  ...sdata,
                  [e?.target?.name]: e?.target?.value,
                  common: "",
                });
                setErrors({
                  ...errors,
                  [e?.target?.name]: false,
                  common: "",
                });
              }}
            />
            <Btn>Войти</Btn>
          </>
        ) : null}
      </form>
      <div className="auth_bottom_section">
        <div className="info_text">
          +998932981798
          <button className="auth_btn" onClick={() => setAction(2)}>
            Поменять номер
          </button>
          <br />
          Не получили СМС ?
          <br />
          Отправить новый код через <button className="auth_btn">
            52
          </button>{" "}
          секунды.
        </div>
      </div>
    </AuthStyle>
  );
};

export default AcceptSms;
