import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Input, Badge, Space, Menu, Dropdown } from "antd";
import DropdownBootstrap from "react-bootstrap/Dropdown";
import {
  BsCardText,
  BsTelephone,
  BsTruck,
  BsCart,
  BsPersonCircle,
} from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

import Cellphones from "../../../Logo/cellphones-logo.png";
import { AiOutlineRight } from "react-icons/ai";
import Mobile from "../../../Logo/icon-mobile.svg";
import Laptop from "../../../Logo/icon-laptop.svg";
import Tablet from "../../../Logo/icon-tablet.svg";
import HeadPhone from "../../../Logo/icon-headphone.svg";
import Clock from "../../../Logo/icon-clock.svg";
import SmartHome from "../../../Logo/icon-smarthome.svg";
import Accessories from "../../../Logo/icon-accessories.svg";
import PC from "../../../Logo/icon_pc.svg";
import TV from "../../../Logo/icon-tv.svg";
import Purchase from "../../../Logo/icon-purchase.svg";
import Secondhand from "../../../Logo/icon-secondhand.svg";
import Sale from "../../../Logo/icon-sale.svg";
import { ROUTES } from "../../../constants/routes";
import {
  logoutUserAction,
  changeStateModalCheckUserOrder,
  getProductListOnSearchAction,
} from "../../../redux/actions";

import * as S from "./HeaderStyles";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);
  const { cartList } = useSelector((state) => state.cart);
  const { productList } = useSelector((state) => state.product);

  const handleChangeKeyword = (value) => {
    dispatch(getProductListOnSearchAction({ data: value }));
  };

  // dispatch(getProductListOnSearchAction({ data: newProductList }));

  // useEffect(() => {
  //   dispatch(getProductListOnSearchAction({ data: newProductList }));
  // }, [keyword]);

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Col span={2}></Col>
        <S.HeaderTitle span={20}>
          <S.Logo onClick={() => navigate(ROUTES.HOME.HOME)}>
            <S.Cellphone src={Cellphones} />
          </S.Logo>
          <DropdownBootstrap>
            <DropdownBootstrap.Toggle
              id="dropdown-basic"
              style={{
                width: "100px",
                fontSize: "14px",
                backgroundColor: "#df3346",
                border: "none",
              }}
            >
              Danh mục
            </DropdownBootstrap.Toggle>
            <DropdownBootstrap.Menu>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_MOBILE}>
                  <S.ItemLeft>
                    <S.ItemIcon src={Mobile} />
                    <span>Điện thoại</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_LAPTOP}>
                  <S.ItemLeft>
                    <S.ItemIcon src={Laptop} />
                    <span>Laptop</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_TABLET}>
                  <S.ItemLeft>
                    <S.ItemIcon src={Tablet} />
                    <span>Máy tính bảng</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_AUDIO}>
                  <S.ItemLeft>
                    <S.ItemIcon src={HeadPhone} />
                    <span>Âm thanh</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_CLOCK}>
                  <S.ItemLeft>
                    <S.ItemIcon src={Clock} />
                    <span>Đồng hồ</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_SMART_HOME}>
                  <S.ItemLeft>
                    <S.ItemIcon src={SmartHome} />
                    <span>Nhà thông minh</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_ACCESSORIES}>
                  <S.ItemLeft>
                    <S.ItemIcon src={Accessories} />
                    <span>Phụ kiện</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_PC}>
                  <S.ItemLeft>
                    <S.ItemIcon src={PC} />
                    <span>PC - Màn hình</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_TV}>
                  <S.ItemLeft>
                    <S.ItemIcon src={TV} />
                    <span>Tivi</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_PURCHASE}>
                  <S.ItemLeft>
                    <S.ItemIcon src={Purchase} />
                    <span>Thu cũ</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_SECONDHAND}>
                  <S.ItemLeft>
                    <S.ItemIcon src={Secondhand} />
                    <span>Hàng cũ</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
              <DropdownBootstrap.Item>
                <S.SlideBarItem to={ROUTES.HOME.HOME_SALE}>
                  <S.ItemLeft>
                    <S.ItemIcon src={Sale} />
                    <span>Khuyến mãi</span>
                  </S.ItemLeft>
                </S.SlideBarItem>
              </DropdownBootstrap.Item>
            </DropdownBootstrap.Menu>
          </DropdownBootstrap>
          <S.Option>
            <AiFillEnvironment
              style={{
                color: "#fff",
                fontSize: "3rem",
                marginRight: "0.15rem",
              }}
            />
            <div>
              <span>Xem giá tại</span>
              <select>
                <option value="Miền Bắc">Miền Bắc</option>
                <option value="Miền Trung">Miền Trung</option>
                <option value="Miền Nam">Miền Nam</option>
              </select>
            </div>
          </S.Option>
          <S.ContainerSearch>
            <S.SearchIcon>
              <BiSearch />
            </S.SearchIcon>
            <S.InputSearch
              type="text"
              placeholder="Bạn cần tìm gì ?"
              onChange={(e) => handleChangeKeyword(e.target.value)}
            />
          </S.ContainerSearch>
          <S.Check>
            <S.CheckContainer>
              <BsTelephone
                style={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  marginRight: "0.15rem",
                }}
              />
              <div>
                <span>Gọi mua hàng</span>
                <span>18002097</span>
              </div>
            </S.CheckContainer>
          </S.Check>
          <S.Check>
            <S.CheckContainer2>
              <AiFillEnvironment
                style={{
                  color: "#fff",
                  fontSize: "3rem",
                  marginRight: "0.15rem",
                }}
              />
              <div>
                <span>Cửa hàng gần bạn</span>
              </div>
            </S.CheckContainer2>
          </S.Check>
          <S.Check>
            <S.CheckContainer3
              onClick={
                userInfo.data.id
                  ? () => navigate(ROUTES.MEMBER.ORDER)
                  : () => navigate(ROUTES.LOGIN.LOGIN)
              }
            >
              <BsTruck
                style={{
                  color: "#fff",
                  fontSize: "3rem",
                  marginRight: "0.15rem",
                }}
              />
              <div>
                <span>Tra cứu đơn hàng</span>
              </div>
            </S.CheckContainer3>
          </S.Check>
          <S.Check>
            <S.CheckContainer2 onClick={() => navigate(ROUTES.CART.CART_PAGE)}>
              <Badge
                count={cartList.length}
                style={{
                  backgroundColor: "#fff",
                  color: "red",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <BsCart
                  style={{
                    color: "#fff",
                    fontSize: "2rem",
                    marginRight: "0.15rem",
                  }}
                />
              </Badge>
              <div>
                <span>Giỏ hàng</span>
              </div>
            </S.CheckContainer2>
          </S.Check>
          <S.Profile>
            <BsPersonCircle
              style={{
                color: "#fff",
                fontSize: "1.4rem",
              }}
            />
            <Space>
              {userInfo.data.id ? (
                <Dropdown
                  overlay={
                    <Menu>
                      {userInfo.data.userRole === "admin" && (
                        <Menu.Item
                          onClick={() => {
                            navigate(ROUTES.ADMIN.ADMIN_HOME);
                          }}
                        >
                          Dashboard
                        </Menu.Item>
                      )}
                      <Menu.Item
                        onClick={() => navigate(ROUTES.MEMBER.HOMEPAGE)}
                      >
                        Smember
                      </Menu.Item>
                      <Menu.Item
                        onClick={() =>
                          dispatch(
                            logoutUserAction({
                              data: {
                                id: userInfo.data.id,
                              },
                              callback: {
                                goToHome: () => navigate(ROUTES.HOME.HOME),
                              },
                            })
                          )
                        }
                      >
                        Logout
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <span>Smember</span>
                </Dropdown>
              ) : (
                <S.Login onClick={() => navigate(ROUTES.LOGIN.LOGIN)}>
                  Đăng nhập
                </S.Login>
              )}
            </Space>
          </S.Profile>
        </S.HeaderTitle>
        <Col span={2}></Col>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
