import { Button, Space, Table, InputNumber, Modal, Form, Input } from "antd";
import { BsChevronLeft } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { size } from "lodash";

import * as S from "./styles";
import { ROUTES } from "../../constants/routes";
import {
  updateItemInCartAction,
  removeItemInCartAction,
  checkInfoShippingAction,
  createOrderAction,
} from "../../redux/actions";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const { cartList } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);
  const { checkInfoShipping, createData } = useSelector((state) => state.oder);
  let totalPrice = 0;
  cartList.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  const [informationShipping] = Form.useForm();
  const [createOder] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeModal2 = () => {
    setIsModal2Open(false);
  };
  const closeModal3 = () => {
    setIsModal3Open(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancel2 = () => {
    setIsModal2Open(false);
  };
  const handleCancel3 = () => {
    setIsModal3Open(false);
  };

  const openModal2 = () => {
    setIsModal2Open(true);
  };
  const openModal3 = () => {
    setIsModal3Open(true);
  };

  const handleChangeQuantity = (productId, value) => {
    dispatch(
      updateItemInCartAction({
        productId: productId,
        quantity: value,
      })
    );
  };

  const handleRemoveItem = (productId) => {
    dispatch(
      removeItemInCartAction({
        productId: productId,
      })
    );
  };

  const handleGetInformationShipping = (values) => {
    dispatch(
      checkInfoShippingAction({
        data: {
          userId: userInfo.data.id ? userInfo.data.id : null,
          email: values.email,
          fullName: values.fullName,
          phone: values.phone,
          address: values.userAddress,
        },
        callback: {
          closeModal: () => closeModal(),
          openModal2: () => openModal2(),
        },
      })
    );
  };

  const handleCreateOrder = (values) => {
    dispatch(
      createOrderAction({
        data: {
          userId: userInfo.data.id ? userInfo.data.id : null,
          guestId: checkInfoShipping.data ? checkInfoShipping.data : null,
          listProductOrder: values.listProductOrder,
        },
        callback: {
          closeModal2: () => closeModal2(),
          goToHome: () => navigate(ROUTES.HOME.HOME),
          openModal3: () => openModal3(),
        },
      })
    );
  };

  const initialValues = {
    fullName: userInfo.data.id ? userInfo.data.fullName : "",
    phone: userInfo.data.id ? userInfo.data.phone : null,
    email: userInfo.data.id ? userInfo.data.email : "",
    userAddress: userInfo.data.id ? userInfo.data.userAddress : "",
  };

  const initialValues2 = {
    listProductOrder: cartList,
  };

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Giá mỗi sản phẩm",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price.toLocaleString()} VNĐ`,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, record) => (
        <InputNumber
          min={1}
          step={1}
          value={quantity}
          onChange={(value) => handleChangeQuantity(record.productId, value)}
        />
      ),
    },
    {
      title: "Thành tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (_, record) =>
        `${(record.price * record.quantity).toLocaleString()} VNĐ`,
    },
    {
      title: "",
      dataIndex: "action",
      key: "",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            danger
            onClick={() => handleRemoveItem(record.productId)}
          >
            Bỏ sản phẩm
          </Button>
        </Space>
      ),
    },
  ];

  const columns2 = [
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Giá mỗi sản phẩm",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price.toLocaleString()} VNĐ`,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, record) => (
        <InputNumber
          min={1}
          step={1}
          value={quantity}
          onChange={(value) => handleChangeQuantity(record.productId, value)}
        />
      ),
    },
    {
      title: "Thành tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (_, record) =>
        `${(record.price * record.quantity).toLocaleString()} VNĐ`,
    },
  ];

  return (
    <S.CartWarpper>
      <S.CartHeader>
        <S.GoHome to={ROUTES.HOME.HOME}>
          <BsChevronLeft />
          Trở về
        </S.GoHome>
        <S.CartTitle>Giỏ hàng</S.CartTitle>
        <S.Fake />
      </S.CartHeader>
      <Table
        rowKey="productId"
        columns={columns}
        dataSource={cartList}
        pagination={false}
      />
      <S.CartFooter>
        <S.TopFooter>
          <S.FooterTitle>Tổng tiền tạm tính :</S.FooterTitle>
          <S.FooterPrice>{`${totalPrice.toLocaleString()} VNĐ`}</S.FooterPrice>
        </S.TopFooter>
        <Button
          type="primary"
          danger
          style={{ width: "95%", backgroundColor: "#d70018" }}
          size="large"
          onClick={showModal}
        >
          TIẾN HÀNH ĐẶT HÀNG
        </Button>
        <Button
          danger
          style={{ width: "95%" }}
          size="large"
          onClick={() => navigate(ROUTES.HOME.HOME)}
        >
          CHỌN THÊM SẢN PHẨM KHÁC
        </Button>
        <Modal
          title="Thông tin người nhận"
          open={isModalOpen}
          okText="Xác nhận"
          cancelText="Hủy"
          onOk={() => informationShipping.submit()}
          onCancel={handleCancel}
        >
          <Form
            form={informationShipping}
            initialValues={initialValues}
            onFinish={(values) => handleGetInformationShipping(values)}
            labelCol={{
              xs: {
                span: 24,
              },
              sm: {
                span: 6,
              },
            }}
            wrapperCol={{
              xs: {
                span: 24,
              },
              sm: {
                span: 18,
              },
            }}
          >
            <Form.Item
              label="Họ tên : "
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ tên !",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Số điện thoại : "
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại !",
                  whitespace: true,
                },
                {
                  len: 10,
                  message: "Số điện thoại không hợp lệ !",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Email : " name="email">
              <Input />
            </Form.Item>
            <Form.Item
              label="Địa chỉ : "
              name="userAddress"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập địa chỉ!",
                  whitespace: true,
                },
                {
                  type: "string",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="Đơn hàng"
          open={isModal2Open}
          okText="Xác nhận"
          cancelText="Hủy"
          onOk={() => createOder.submit()}
          onCancel={handleCancel2}
        >
          <Form
            form={createOder}
            initialValues={initialValues2}
            onFinish={(values) => handleCreateOrder(values)}
          >
            <Form.Item name="listProductOrder">
              <Table
                rowKey="productId"
                columns={columns2}
                dataSource={cartList}
                pagination={false}
              />
            </Form.Item>
            <S.TopFooter>
              <S.FooterTitle>Tổng tiền :</S.FooterTitle>
              <S.FooterPrice>{`${totalPrice.toLocaleString()} VNĐ`}</S.FooterPrice>
            </S.TopFooter>
          </Form>
        </Modal>
        <Modal
          title="Thông báo"
          open={isModal3Open}
          okText="Xác nhận"
          cancelText="Hủy"
          onOk={() => closeModal3()}
          onCancel={handleCancel3}
        >
          {createData.message}
        </Modal>
      </S.CartFooter>
    </S.CartWarpper>
  );
};

export default CartPage;
