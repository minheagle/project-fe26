import styled from "styled-components";
import { Row, Col } from "antd";
import Rate from "rc-rate";
import { Link } from "react-router-dom";

export const HomePageContainer = styled.div``;

export const RowAnt = styled(Row)`
  width: 100%;
  margin-top: 1rem;
`;

export const ColAnt = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomsLink = styled(Link)`
  text-decoration: none;
  color: #141414;
  &:hover {
    color: #141414;
  }
`;
export const StyledRate = styled(Rate)`
  &.rc-rate {
    font-size: ${({ size }) => size}px;
  }
`;

export const ProductWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 22rem;
  object-fit: cover;
  border-radius: 10px;
`;

export const ProductContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 100%;
`;

export const ProductImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.div`
  width: 100%;
  height: 30%;
  font-size: 18px;
  text-align: center;
  margin: 10px;
`;

export const ProductPrice = styled.div`
  width: 100%;
  height: 20%;
`;

export const ProductVoucher = styled.div`
  width: 100%;
  height: 20%;
  font-size: 16px;
`;

export const ProductRate = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductDetail = styled(Link)`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Detail = styled.div`
  width: 80%;
  height: 100%;
  background-color: #f5222d;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
`;
