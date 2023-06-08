import React from "react";
import { useLocation } from "react-router-dom";

import { AiOutlineRight } from "react-icons/ai";
import Mobile from "../../../../Logo/icon-mobile.svg";
import Laptop from "../../../../Logo/icon-laptop.svg";
import Tablet from "../../../../Logo/icon-tablet.svg";
import HeadPhone from "../../../../Logo/icon-headphone.svg";
import Clock from "../../../../Logo/icon-clock.svg";
import SmartHome from "../../../../Logo/icon-smarthome.svg";
import Accessories from "../../../../Logo/icon-accessories.svg";
import PC from "../../../../Logo/icon_pc.svg";
import TV from "../../../../Logo/icon-tv.svg";
import Purchase from "../../../../Logo/icon-purchase.svg";
import Secondhand from "../../../../Logo/icon-secondhand.svg";
import Sale from "../../../../Logo/icon-sale.svg";

import { ROUTES } from "../../../../constants/routes";

import * as S from "./SlidebarStyles";

const Slidebar = () => {
  const { pathname } = useLocation();

  return (
    <S.SlideBarContainer>
      <S.SlideBarItem to={ROUTES.HOME.HOME_MOBILE}>
        <S.ItemLeft>
          <S.ItemIcon src={Mobile} />
          <span>Điện thoại</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
      <S.SlideBarItem to={ROUTES.HOME.HOME_LAPTOP}>
        <S.ItemLeft>
          <S.ItemIcon src={Laptop} />
          <span>Laptop</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
      <S.SlideBarItem to={ROUTES.HOME.HOME_TABLET}>
        <S.ItemLeft>
          <S.ItemIcon src={Tablet} />
          <span>Máy tính bảng</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
      <S.SlideBarItem to={ROUTES.HOME.HOME_AUDIO}>
        <S.ItemLeft>
          <S.ItemIcon src={HeadPhone} />
          <span>Âm thanh</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
      <S.SlideBarItem to={ROUTES.HOME.HOME_CLOCK}>
        <S.ItemLeft>
          <S.ItemIcon src={Clock} />
          <span>Đồng hồ</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
      <S.SlideBarItem to={ROUTES.HOME.HOME_SMART_HOME}>
        <S.ItemLeft>
          <S.ItemIcon src={SmartHome} />
          <span>Nhà thông minh</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
      <S.SlideBarItem to={ROUTES.HOME.HOME_ACCESSORIES}>
        <S.ItemLeft>
          <S.ItemIcon src={Accessories} />
          <span>Phụ kiện</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
      <S.SlideBarItem to={ROUTES.HOME.HOME_PC}>
        <S.ItemLeft>
          <S.ItemIcon src={PC} />
          <span>PC - Màn hình</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
      <S.SlideBarItem to={ROUTES.HOME.HOME_TV}>
        <S.ItemLeft>
          <S.ItemIcon src={TV} />
          <span>Tivi</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
      <S.SlideBarItem to={ROUTES.HOME.HOME_PURCHASE}>
        <S.ItemLeft>
          <S.ItemIcon src={Purchase} />
          <span>Thu cũ</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
      <S.SlideBarItem to={ROUTES.HOME.HOME_SECONDHAND}>
        <S.ItemLeft>
          <S.ItemIcon src={Secondhand} />
          <span>Hàng cũ</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
      <S.SlideBarItem to={ROUTES.HOME.HOME_SALE}>
        <S.ItemLeft>
          <S.ItemIcon src={Sale} />
          <span>Khuyến mãi</span>
        </S.ItemLeft>
        <AiOutlineRight />
      </S.SlideBarItem>
    </S.SlideBarContainer>
  );
};

export default Slidebar;
