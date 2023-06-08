import React from "react";
import { useLocation } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { RiFileHistoryFill, RiFeedbackFill } from "react-icons/ri";
import { BsFillGiftFill, BsFillPersonFill } from "react-icons/bs";
import { GiRank3 } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

import { ROUTES } from "../../../constants/routes";
import * as S from "./SlidebarMemberStyles";

const SlidebarMember = () => {
  const { pathname } = useLocation();
  return (
    <S.SlideBarContent>
      <S.SlideBarMenu>
        <S.SidebarItem
          to={ROUTES.MEMBER.HOMEPAGE}
          active={pathname === `${ROUTES.MEMBER.HOMEPAGE}`}
        >
          <AiFillHome
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "0.8rem",
            }}
          />
          Trang chủ
        </S.SidebarItem>
        <S.SidebarItem
          to={ROUTES.MEMBER.ORDER}
          active={pathname === `${ROUTES.MEMBER.ORDER}`}
        >
          <RiFileHistoryFill
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "0.8rem",
            }}
          />
          Lịch sử mua hàng
        </S.SidebarItem>
        <S.SidebarItem
          to={ROUTES.MEMBER.PROMOTION}
          active={pathname === `${ROUTES.MEMBER.PROMOTION}`}
        >
          <BsFillGiftFill
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "0.8rem",
            }}
          />
          Ưu đãi của bạn
        </S.SidebarItem>
        <S.SidebarItem
          to={ROUTES.MEMBER.RANK}
          active={pathname === `${ROUTES.MEMBER.RANK}`}
        >
          <GiRank3
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "0.8rem",
            }}
          />
          Hạng thành viên
        </S.SidebarItem>
        <S.SidebarItem
          to={ROUTES.MEMBER.ACCOUNT_INFO}
          active={pathname === `${ROUTES.MEMBER.ACCOUNT_INFO}`}
        >
          <BsFillPersonFill
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "0.8rem",
            }}
          />
          Tài khoản của bạn
        </S.SidebarItem>
        <S.SidebarItem
          to={ROUTES.MEMBER.ACCOUNT_SUPPORT}
          active={pathname === `${ROUTES.MEMBER.ACCOUNT_SUPPORT}`}
        >
          <BiSupport
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "0.8rem",
            }}
          />
          Hỗ trợ
        </S.SidebarItem>
        <S.SidebarItem
          to={ROUTES.MEMBER.ACCOUNT_FEEDBACK}
          active={pathname === `${ROUTES.MEMBER.ACCOUNT_FEEDBACK}`}
        >
          <RiFeedbackFill
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "0.8rem",
            }}
          />
          Góp ý - Phản hồi
        </S.SidebarItem>
        <S.SidebarItem>
          <FiLogOut
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "0.8rem",
            }}
          />
          Thoát tài khoản
        </S.SidebarItem>
      </S.SlideBarMenu>
    </S.SlideBarContent>
  );
};

export default SlidebarMember;
