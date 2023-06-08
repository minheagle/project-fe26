import React from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";

import Header from "../Home/Header/Header";
import FakeHeader from "../../components/FakeHeader";

import * as S from "./styles";

const CartLayout = () => {
  return (
    <S.CartContainer>
      <Row>
        <Col span={24}>
          <FakeHeader />
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <Outlet />
        </Col>
        <Col span={6}></Col>
      </Row>
    </S.CartContainer>
  );
};

export default CartLayout;
