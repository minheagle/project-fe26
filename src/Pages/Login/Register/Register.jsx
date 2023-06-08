import React, { useEffect } from "react";
import { Form, Checkbox, Input, Alert } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { registerUserAction } from "../../../redux/actions";

import Shipper from "../../../Logo/shipper.png";
import Google from "../../../Logo/logo-google.png";

import { ROUTES } from "../../../constants/routes";

import * as S from "./RegisterStyles";

const Register = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerData } = useSelector((state) => state.user);

  const [registerForm] = Form.useForm();

  useEffect(() => {
    if (registerData.error) {
      registerForm.setFields([
        {
          name: "email",
          errors: [registerData.error],
        },
      ]);
    }
  }, [registerData.error]);

  const handleRegister = (values) => {
    dispatch(
      registerUserAction({
        data: {
          phone: values.phone,
          email: values.email,
          fullName: values.fullName,
          userPassword: values.password,
        },
        callback: {
          goToLogin: () => navigate(ROUTES.LOGIN.LOGIN),
        },
      })
    );
  };

  return (
    <S.RegisterContainer>
      <S.RegisterTop>
        <S.Title>
          <h1>Đăng ký tài khoản</h1>
        </S.Title>
        <S.LogoContainer>
          <S.RegisterLogo src={Shipper} />
        </S.LogoContainer>
      </S.RegisterTop>
      {registerData.message ? <Alert message={registerData.message} /> : <></>}
      <S.RegisterForm>
        <h2>Đăng ký tài khoản Smember</h2>
        <Form
          form={registerForm}
          name="registerForm"
          autoComplete="off"
          initialValues={{ remember: true }}
          onFinish={(values) => handleRegister(values)}
        >
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại !",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Vui lòng nhập số điện thoại (bắt buộc)" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ email !",
                whitespace: true,
              },
              {
                type: "email",
                message: "Email không hợp lệ !",
              },
            ]}
          >
            <Input placeholder="Vui lòng nhập địa chỉ email (bắt buộc)" />
          </Form.Item>
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên !",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Vui lòng nhập họ và tên" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu của bạn !",
                whitespace: true,
              },
              {
                type: "string",
                min: 8,
              },
            ]}
          >
            <S.FormInput.Password
              type="password"
              placeholder="Nhập mật khẩu của bạn"
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận lại mật khẩu !",
                whitespace: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Nhập lại mật khẩu không chính xác !")
                  );
                },
              }),
            ]}
          >
            <S.FormInput.Password
              type="password"
              placeholder="Xác nhận lại mật khẩu"
            />
          </Form.Item>
          <Form.Item>
            <Checkbox checked>
              Tôi đồng ý với các điều khoản bảo mật cá nhân
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Checkbox checked>
              Đăng ký nhận bản tin khuyến mãi qua email
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <S.RegisterButton htmlType="submit">Đăng ký</S.RegisterButton>
          </Form.Item>
        </Form>
      </S.RegisterForm>
      <S.RegisterBottom>
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
          <div>Bạn đã có tài khoản?</div>
          <S.LinkLogin
            to={ROUTES.LOGIN.LOGIN}
            active={pathname === `${ROUTES.LOGIN.LOGIN}`}
          >
            Đăng nhập ngay
          </S.LinkLogin>
        </S.Decription>
      </S.RegisterBottom>
    </S.RegisterContainer>
  );
};

export default Register;
