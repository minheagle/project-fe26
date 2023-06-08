import { Button, Form, Input, Alert } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateUserAction } from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

import * as S from "./styles";
import IconCellphoneS from "../../../Logo/cellphones-icon.png";
import { values } from "lodash";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { userInfo, updateData } = useSelector((state) => state.user);

  const handleUpdateForm = (values) => {
    dispatch(
      updateUserAction({
        data: {
          id: userInfo.data.id,
          fullName: values.fullName,
          phone: values.phone,
          email: values.email,
          userAddress: values.userAddress,
        },
      })
    );
  };

  const initialValues = {
    fullName: userInfo.data.fullName,
    phone: userInfo.data.phone,
    email: userInfo.data.email,
    userAddress: userInfo.data.userAddress,
    created_at: userInfo.data.created_at,
  };

  return (
    <S.UserInfoContainer>
      <S.HeaderFrom>
        <S.ImageContainer>
          <S.Image src={IconCellphoneS} />
        </S.ImageContainer>
        <S.UserName>{userInfo.data.fullName}</S.UserName>
      </S.HeaderFrom>
      {updateData.message ? <Alert message={updateData.message} /> : <></>}
      <S.FormAnt
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => handleUpdateForm(values)}
      >
        <Form.Item label="Họ tên :" name="fullName">
          <Input />
        </Form.Item>
        <Form.Item label="Số điện thoại :" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="Email :" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Địa chỉ :" name="userAddress">
          <Input />
        </Form.Item>
        <Form.Item label="Ngày tham gia :" name="created_at">
          <Input readOnly />
        </Form.Item>
        <Form.Item>
          <Button
            type="submit"
            htmlType="submit"
            loading={updateData.loading}
            style={{
              backgroundColor: "#fd2424",
              color: "#ffffff",
              width: "100%",
              height: "3rem",
              borderRadius: "1.5rem",
              fontSize: "16px",
            }}
          >
            Cập nhật thông tin
          </Button>
        </Form.Item>
      </S.FormAnt>
      <S.CustomLink to={ROUTES.MEMBER.CHANGE_PASSWORD}>
        Thay đổi mật khẩu
      </S.CustomLink>
    </S.UserInfoContainer>
  );
};

export default UserInfo;
