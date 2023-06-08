import React, { useEffect } from "react";
import { Form, Input } from "antd";

import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Shipper from "../../../Logo/shipper.png";
import Google from "../../../Logo/logo-google.png";

import { ROUTES } from "../../../constants/routes";
import { loginUserAction } from "../../../redux/actions";

import * as S from "./LoginStyles";

const Login = () => {
  const [loginForm] = Form.useForm();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginData } = useSelector((state) => state.user);

  useEffect(() => {
    if (loginData.error) {
      loginForm.setFields([
        {
          name: "email",
          errors: [" "],
        },
        {
          name: "password",
          errors: [loginData.error],
        },
      ]);
    }
  }, [loginData.error]);

  const handleLogin = (values) => {
    dispatch(
      loginUserAction({
        data: {
          email: values.email,
          userPassword: values.password,
        },
        callback: {
          goToDashboard: () => navigate(ROUTES.ADMIN.ADMIN_HOME),
          goToHome: () => navigate(ROUTES.HOME.HOME),
        },
      })
    );
  };

  return (
    <S.LoginContainer>
      <S.LogoContainer>
        <S.LoginLogo src={Shipper} />
      </S.LogoContainer>
      <S.LoginForm>
        <h2>Đăng nhập tài khoản Smember</h2>
        <Form
          form={loginForm}
          name="loginForm"
          autoComplete="off"
          onFinish={(values) => handleLogin(values)}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email !",
              },
            ]}
          >
            <Input placeholder="Vui lòng nhập email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu của bạn !",
              },
            ]}
          >
            <S.FormInput.Password
              type="password"
              placeholder="Nhập mật khẩu của bạn"
            />
          </Form.Item>
          <Form.Item>
            <S.LoginButton htmlType="submit">Đăng nhập</S.LoginButton>
          </Form.Item>
        </Form>
      </S.LoginForm>
      <S.LoginBottom>
        <S.Or>
          <hr />
          <S.TagP>hoặc</S.TagP>
          <hr />
        </S.Or>
        <S.GoogleButton>
          <img src={Google} />
          <div>Đăng ký bằng Google</div>
        </S.GoogleButton>
        <S.Decription>
          <div>Bạn chưa có tài khoản?</div>
          <S.LinkLogin
            to={ROUTES.LOGIN.REGISTER}
            active={pathname === `${ROUTES.LOGIN.REGISTER}`}
          >
            Đăng ký ngay
          </S.LinkLogin>
        </S.Decription>
      </S.LoginBottom>
    </S.LoginContainer>
  );
};

export default Login;
