import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

import Header from "../Home/Header/Header";
import SlideBar from "./SlidebarMember/SlidebarMember";
import FakeHeader from "../../components/FakeHeader";

import * as S from "./MemberStyles";
import { useDispatch } from "react-redux";
import { getUserInfoAction } from "../../redux/actions";

const Member = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const decode = jwtDecode(accessToken);
      dispatch(getUserInfoAction({ id: decode.userInfo.id }));
    }
  }, []);

  return (
    <S.MemberContainer>
      <Row>
        <FakeHeader />
        <Header />
      </Row>
      <Row>
        <Col span={2}></Col>
        <Col span={4}>
          <SlideBar />
        </Col>
        <Col span={16}>
          <Outlet />
        </Col>
        <Col span={2}></Col>
      </Row>
    </S.MemberContainer>
  );
};

export default Member;
