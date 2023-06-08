import React from "react";

import * as S from "./RankStyles";

import RankIcon from "../../../Logo/member-rank.png";

const Rank = () => {
  return (
    <S.Container>
      <S.Top>
        <S.ContainerIcon>
          <S.Icon src={RankIcon} />
        </S.ContainerIcon>
      </S.Top>
      <S.Bottom>
        <S.P1>Hạng thành viên</S.P1>
        <S.P2>Bạn đang là SNull</S.P2>
        <S.Button>Xem chi tiết</S.Button>
      </S.Bottom>
    </S.Container>
  );
};

export default Rank;
