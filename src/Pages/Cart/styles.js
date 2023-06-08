import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartWarpper = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CartHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

export const Fake = styled.div`
  width: 20%;
  height: 50px;
`;

export const GoHome = styled(Link)`
  width: 20%;
  height: 50px;
  text-decoration: none;
  border: none;
  color: #d70018;
  font-weight: 600;
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #d70018;
  }
`;

export const CartTitle = styled.div`
  width: 60%;
  height: 50px;
  line-height: 50px;
  color: #d70018;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const CartFooter = styled.div`
  width: 100%;
  height: 180px;
  position: absolute;
  bottom: 0;
  border-radius: 15px;
  box-shadow: #3c4043 0px 1px 2px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TopFooter = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterTitle = styled.div`
  width: 40%;
  height: 32px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FooterPrice = styled.div`
  width: 40%;
  height: 32px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 10px;
  color: #d70018;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
