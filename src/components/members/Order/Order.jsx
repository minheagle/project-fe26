import React from "react";

import * as S from "./OrderStyles";

import OrderIcon from "../../../Logo/order.png";

const Order = () => {
  return (
    <S.Container>
      <S.Top>
        <S.ContainerIcon>
          <S.Icon src={OrderIcon} />
        </S.ContainerIcon>
      </S.Top>
      <S.Bottom>
        <S.P1>Đơn hàng của bạn</S.P1>
        <S.P2>1 đơn hàng</S.P2>
        <S.Button>Xem chi tiết</S.Button>
      </S.Bottom>
    </S.Container>
  );
};

export default Order;
