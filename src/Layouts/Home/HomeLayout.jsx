import React from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FakeHeader from "../../components/FakeHeader";

import * as S from "./HomeLayoutStyles";

const HomeLayout = () => {
  return (
    <S.HomeContainer>
      <Row style={{ position: "relative" }}>
        <Col span={24}>
          <FakeHeader />
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Outlet />
        </Col>
        <Col span={2}></Col>
      </Row>
      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </S.HomeContainer>
  );
};

export default HomeLayout;
