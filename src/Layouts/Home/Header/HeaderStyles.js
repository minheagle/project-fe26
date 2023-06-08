import styled from "styled-components";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  z-index: 99;
  width: 100%;
  height: 4rem;
  background-color: #d70018;
  box-shadow: #000000 0px 4px 6px -1px;
  color: #4a4a4a;
  font-family: sans-serif;
  line-height: 24px;
`;

export const Logo = styled.div`
  width: 185px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cellphone = styled.img`
  width: 171px;
  height: 35px;
`;

export const HeaderContent = styled(Row)`
  width: 100%;
  height: 100%;
`;

export const HeaderTitle = styled(Col)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DanhMuc = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95px;
  height: 42px;
  background-color: #df3346;
  border-radius: 10px;
  border: none;
  span {
    font-size: 0.7rem;
    line-height: 0.7rem;
    color: #fff;
  }
`;

export const SlideBarItem = styled(Link)`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #343a40;
  &:hover {
    background-color: #d9d9d9;
    color: #343a40;
    border-radius: 0.8rem;
  }
`;

export const ItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 0.8rem;
    font-weight: 600;
    margin-left: 0.2rem;
  }
`;

export const ItemIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Option = styled.div`
  width: 120px;
  height: 39px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #df3346;
  border-radius: 10px;
  div {
    span {
      color: #fff;
      font-size: 0.8rem;
    }
    select {
      width: 100px;
      background-color: #df3346;
      border: none;
    }
  }
`;

export const ContainerSearch = styled.div`
  width: 300px;
  height: 34px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

export const SearchIcon = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputSearch = styled.input`
  width: 85%;
  border: none;
  &:target {
    border: none;
  }
`;

export const Check = styled.button`
  width: 114px;
  height: 42px;
  border: none;
  background-color: #d70018;

  border-radius: 10px;
  &:hover {
    background-color: #ff4d4f;
    border-radius: 10px;
  }
`;

export const CheckContainer = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    span {
      font-size: 0.75rem;
      color: #fff;
    }
  }
`;

export const CheckContainer2 = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    span {
      font-size: 0.8rem;
      color: #fff;
    }
  }
`;
export const CheckContainer3 = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    span {
      font-size: 0.8rem;
      color: #fff;
    }
  }
`;

export const Profile = styled.div`
  width: 100px;
  height: 42px;
  background-color: #df3346;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    font-size: 0.8rem;
    line-height: 0.7rem;
    color: #fff;
  }
`;

export const Login = styled.button`
  width: 70px;
  height: 42px;
  background-color: #df3346;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.7rem;
  line-height: 0.7rem;
  color: #fff;
`;
