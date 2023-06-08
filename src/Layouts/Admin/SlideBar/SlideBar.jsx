import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./SlideBarStyles";
import { ROUTES } from "../../../constants/routes";
import { logoutUserAction } from "../../../redux/actions";
import { Item } from "./constant";

const SlideBar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(
      logoutUserAction({
        data: {
          id: userInfo.data.id,
        },
        callback: {
          goToHome: () => navigate(ROUTES.HOME.HOME),
        },
      })
    );
  };

  const renderSlideBarItem = () => {
    return Item.map((item, index) => {
      return (
        <S.ItemContainer key={index}>
          <S.SidebarItem to={item.path} active={pathname === item.path}>
            {item.icon}
            {item.title}
          </S.SidebarItem>
        </S.ItemContainer>
      );
    });
  };

  return (
    <S.SlideBarContent>
      <S.SlideBarTitle>Admin Page</S.SlideBarTitle>

      <S.SlideBarMenu>
        {renderSlideBarItem()}
        <S.ItemContainer>
          <S.LogoutButton
            onClick={() => {
              handleLogout();
            }}
          >
            <BsFillArrowRightSquareFill
              style={{
                color: "white",
                fontSize: "1.5rem",
                marginRight: "0.8rem",
              }}
            />
            Logout
          </S.LogoutButton>
        </S.ItemContainer>
      </S.SlideBarMenu>
    </S.SlideBarContent>
  );
};

export default SlideBar;
