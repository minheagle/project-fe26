import React from "react";

import Col from "react-bootstrap/Col";

import UserInfo from "../../../components/members/UserInfo/UserInfo";
import Sale from "../../../components/members/Sale/Sale";
import Promotion from "../../../components/members/Promotion/Promotion";
import Order from "../../../components/members/Order/Order";
import Rank from "../../../components/members/Rank/Rank";

import * as S from "./HomePageStyles";

const HomePage = () => {
  return (
    <S.ContainerBT>
      <S.RowBT1>
        <S.InfoUser>
          <UserInfo />
        </S.InfoUser>
      </S.RowBT1>
      <S.RowBT>
        <S.Sale>
          <Sale />
        </S.Sale>
      </S.RowBT>
      <S.RowBT>
        <Col>
          <S.Promotion>
            <Promotion />
          </S.Promotion>
        </Col>
        <Col>
          <S.Order>
            <Order />
          </S.Order>
        </Col>
        <Col>
          <S.Rank>
            <Rank />
          </S.Rank>
        </Col>
      </S.RowBT>
    </S.ContainerBT>
  );
};

export default HomePage;
