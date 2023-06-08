import React from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";

import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";

import * as S from "./ProductDetailStyles";
import FakeHeader from "../../components/FakeHeader";

const ProductDetail = () => {
  return (
    <S.Wrapper>
      <Header />
      <FakeHeader />
      <Row>
        <Col span={2} />
        <Col span={20}>
          <Outlet />
        </Col>
        <Col span={2} />
      </Row>
      <Footer />
    </S.Wrapper>
  );
};

export default ProductDetail;
