import React from "react";
import { Table } from "antd";

import * as S from "./styles";
import ShiperIcon from "../../../Logo/order.png";
import OrderIcon from "../../../Logo/promotion.png";
import { useSelector } from "react-redux";

const OrderMember = () => {
  const { userInfo } = useSelector((state) => state.user);

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Giá mỗi sản phẩm",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Thời gian mua",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];

  return (
    <S.OrderContainer>
      <S.OrderTop>
        <S.Title>QUẢN LÝ ĐƠN HÀNG</S.Title>
        <S.Content>
          <S.ContentItem>
            <S.Image src={ShiperIcon} />
            <div>Số lượng đơn hàng : {userInfo.data.orderCount}</div>
          </S.ContentItem>
          <S.ContentItem>
            <S.Image src={OrderIcon} />
            <div>Đã mua : </div>
          </S.ContentItem>
        </S.Content>
      </S.OrderTop>
      <S.OrderBottom>
        <Table
          rowKey="id"
          pagination={false}
          columns={columns}
          dataSource={userInfo.data.orderList}
          style={{ width: "80%" }}
        />
      </S.OrderBottom>
    </S.OrderContainer>
  );
};

export default OrderMember;
