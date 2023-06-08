import * as S from "./styles";
import IconCellphoneS from "../../../Logo/cellphones-icon.png";
import { Form, Input, Button, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordAction } from "../../../redux/actions";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { userInfo, changePassword } = useSelector((state) => state.user);

  const handleChangePassword = (values) => {
    dispatch(
      changePasswordAction({
        data: {
          id: userInfo.data.id,
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        },
      })
    );
  };
  const initialValues = {
    currentPassword: "",
    newPassword: "",
  };

  return (
    <S.ChangeContainer>
      <S.HeaderFrom>
        <S.ImageContainer>
          <S.Image src={IconCellphoneS} />
        </S.ImageContainer>
        <S.UserName>Thay đổi mật khẩu</S.UserName>
      </S.HeaderFrom>
      {changePassword.message ? (
        <Alert message={changePassword.message} />
      ) : (
        <></>
      )}
      <S.FormAnt
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => handleChangePassword(values)}
      >
        <Form.Item
          label="Mật khẩu hiện tại :"
          name="currentPassword"
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
          <Input.Password
            type="password"
            placeholder="Nhập mật khẩu hiện tại của bạn"
          />
        </Form.Item>
        <Form.Item
          label="Mật khẩu mới :"
          name="newPassword"
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
            placeholder="Nhập mật khẩu mới của bạn"
          />
        </Form.Item>
        <Form.Item
          label="Xác nhận mật khẩu :"
          name="confirm"
          dependencies={["newPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Vui lòng xác nhận lại mật khẩu !",
              whitespace: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
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
          <Button
            type="submit"
            htmlType="submit"
            loading={changePassword.loading}
            style={{
              backgroundColor: "#fd2424",
              color: "#ffffff",
              width: "100%",
              height: "3rem",
              borderRadius: "1.5rem",
              fontSize: "16px",
            }}
          >
            Thay đổi mật khẩu
          </Button>
        </Form.Item>
      </S.FormAnt>
    </S.ChangeContainer>
  );
};

export default ChangePassword;
