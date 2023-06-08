import React from "react";
import { Row, Col } from "antd";
import { Outlet, Navigate } from "react-router-dom";

import Header from "../Home/Header/Header";
import { ROUTES } from "../../constants/routes";
import FakeHeader from "../../components/FakeHeader";

import * as S from "./LoginStyles";

const Login = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) return <Navigate to={ROUTES.HOME.HOME} />;
  return (
    <S.RegisterContainer>
      <Row>
        <FakeHeader />
        <Header />
      </Row>
      <Row>
        <Col span={7}></Col>
        <Col span={10}>
          <Outlet />
        </Col>
        <Col span={7}></Col>
      </Row>
    </S.RegisterContainer>
  );
};

export default Login;
