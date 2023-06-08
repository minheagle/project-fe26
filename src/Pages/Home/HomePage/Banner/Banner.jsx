import React from "react";

import * as S from "./BannerStyles";
import Banner1 from "../../../../Logo/banner-1.png";
import Banner2 from "../../../../Logo/banner-2.png";
import Banner3 from "../../../../Logo/banner-3.png";

const Banner = () => {
  return (
    <S.BannerContainer>
      <S.BannerItem>
        <S.ImageItem src={Banner1} />
      </S.BannerItem>
      <S.BannerItem>
        <S.ImageItem src={Banner2} />
      </S.BannerItem>
      <S.BannerItem>
        <S.ImageItem src={Banner3} />
      </S.BannerItem>
    </S.BannerContainer>
  );
};

export default Banner;
