import styled from "styled-components";
import { Col } from "react-bootstrap";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const ImageContent = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 5px;
  background-color: linear-gradient(90deg, #dd5e89, #f7bb97);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const ListImage = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background-color: linear-gradient(90deg, #dd5e89, #f7bb97);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemImage = styled.div`
  width: 25%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductName = styled.div`
  width: 100%;
  height: 3rem;
  font-size: 1.3rem;
  font-weight: 600;
  border-bottom: 2px solid #f0f0f0;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProductPriceContainer = styled.div`
  width: 100%;
  object-fit: cover;
`;

export const ProductPrice = styled.div`
  width: 100%;
  height: 150px;
  font-size: 1.5rem;
  font-weight: 500;
  color: #d70018;
  margin-top: 2rem;
  padding-top: 2rem;
  margin-left: 1rem;
`;

export const QuantityContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Quantity = styled.div`
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  padding-left: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AddCart = styled.div`
  width: 20%;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 3px solid #d70018;
  border-radius: 10px;
`;

export const ShortInformation = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
`;
