import styled from "styled-components";
import Rate from "rc-rate";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

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

export const ColAnt = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #fff;
  border-radius: 10px;
  gap: 10px; */
`;

export const ProductWrapper = styled.div`
  width: 95%;
  height: 24rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
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
  height: 200px;
  flex-shrink: 0;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Content = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: auto;
`;

export const ProductTitle = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin: 10px;
`;

export const ProductPrice = styled.div`
  width: 100%;
  flex-shrink: 0;
  margin-top: auto;
`;

export const ProductVoucher = styled.div`
  width: 100%;
  font-size: 16px;
`;

export const ProductRate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Detail = styled.div`
  width: 80%;
  background-color: #f5222d;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
`;
