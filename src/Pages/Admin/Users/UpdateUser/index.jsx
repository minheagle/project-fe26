import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getUserByIdAction,
  updateUserForAdminAction,
} from "../../../../redux/actions";
import { ROUTES } from "../../../../constants/routes";

import * as S from "./styles";
import { Button, Form, Input } from "antd";

const UpdateUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userById, updateAdminData } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserByIdAction({ id: id }));
  }, []);

  const handleUpdateForm = (values) => {
    dispatch(
      updateUserForAdminAction({
        data: {
          id: userById.data.id,
          fullName: values.fullName,
          phone: values.phone,
          userAddress: values.userAddress,
          email: values.email,
        },
        callback: {
          goToUserList: () => navigate(ROUTES.ADMIN.ADMIN_USER_LIST),
        },
      })
    );
  };

  const initialValues = {
    fullName: userById.data.fullName,
    phone: userById.data.phone,
    userAddress: userById.data.userAddress,
    email: userById.data.email,
  };
  return (
    <S.UsersContainer>
      <S.FormAnt
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => handleUpdateForm(values)}
      >
        <Form.Item label="Họ tên : " name="fullName">
          <Input />
        </Form.Item>
        <Form.Item label="Số điện thoại : " name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="Địa chỉ : " name="userAddress">
          <Input />
        </Form.Item>
        <Form.Item label="Email : " name="email">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={updateAdminData.loading}
          >
            Hoàn tất
          </Button>
        </Form.Item>
      </S.FormAnt>
    </S.UsersContainer>
  );
};

export default UpdateUser;
