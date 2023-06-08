import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button, Form, Input, Select, Alert } from "antd";

import { registerUserAction } from "../../../../redux/actions";

import * as S from "./CreateUserStyles";
import IconCellphoneS from "../../../../Logo/cellphones-icon.png";

const { Option } = Select;

const CreateUser = () => {
  const dispatch = useDispatch();

  const { registerData } = useSelector((state) => state.user);

  const handleRegister = (values) => {
    dispatch(
      registerUserAction({
        data: {
          phone: values.phone,
          email: values.email,
          fullName: values.fullName,
          userPassword: values.password,
        },
      })
    );
  };

  return (
    <S.CreateContainer>
      {registerData.message ? <Alert message={registerData.message} /> : <></>}
      <S.HeaderFrom>
        <S.ImageContainer>
          <S.Image src={IconCellphoneS} />
        </S.ImageContainer>
        <S.Title>Tạo người dùng</S.Title>
      </S.HeaderFrom>
      <S.FormAnt
        layout="vertical"
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
          <Button type="primary" htmlType="submit">
            Hoàn tất
          </Button>
        </Form.Item>
      </S.FormAnt>
    </S.CreateContainer>
  );
};

export default CreateUser;
