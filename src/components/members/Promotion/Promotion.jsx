import React from "react";

import * as S from "./PromotionStyles";

import PromotionIcon from "../../../Logo/promotion.png";

const Promotion = () => {
  return (
    <S.Container>
      <S.Top>
        <S.ContainerIcon>
          <S.Icon src={PromotionIcon} />
        </S.ContainerIcon>
      </S.Top>
      <S.Bottom>
        <S.P1>Ưu đãi của bạn</S.P1>
        <S.P2>0 ưu đãi</S.P2>
        <S.Button>Xem chi tiết</S.Button>
      </S.Bottom>
    </S.Container>
  );
};

export default Promotion;
