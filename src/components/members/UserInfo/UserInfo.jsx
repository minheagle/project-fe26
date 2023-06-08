import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Logo from "../../../Logo/cellphones-icon.png";
import Created from "../../../Logo/created-at.png";
import Rank from "../../../Logo/rank.png";
import Point from "../../../Logo/point.png";

import * as S from "./UserInfoStyles";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <Container>
      <Row>
        <S.ContainerTop>
          <S.ContainerLogo>
            <S.Logo src={Logo} />
          </S.ContainerLogo>
          <S.Welcome>
            <S.P1>Xin chào</S.P1>
            <S.P2>{userInfo.data.fullName}</S.P2>
          </S.Welcome>
        </S.ContainerTop>
      </Row>
      <Row>
        <Col>
          <S.Item>
            <S.P1>Ngày tham gia</S.P1>
            <S.Icon src={Created} />
            <S.P1>{userInfo.data.created_at}</S.P1>
          </S.Item>
        </Col>
        <Col>
          <S.Item>
            <S.P1>Hạng thành viên</S.P1>
            <S.Icon src={Rank} />
            <S.P1>SNull</S.P1>
          </S.Item>
        </Col>
        <Col>
          <S.Item>
            <S.P1>Điểm tích lũy</S.P1>
            <S.Icon src={Point} />
            <S.P1>250,000 đ</S.P1>
          </S.Item>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfo;
