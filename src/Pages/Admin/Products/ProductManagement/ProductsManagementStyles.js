import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row } from "antd";

export const ProductsContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: #3c4043 0px 1px 2px 0px;
`;

export const HeadList = styled(Row)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CreateButton = styled(Link)`
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: #1890ff;
  cursor: pointer;
  border: none;
  color: #fff;
  margin: 1rem;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #fff;
  }
`;

export const EditLink = styled(Link)`
  width: 5rem;
  height: 2rem;
  background-color: #fa8c16;
  color: white;
  font-size: 1rem;
  border-radius: 0.3rem;
  text-decoration: none;
  margin-right: 0.5rem;
`;

export const DeleteLink = styled(Link)`
  width: 5rem;
  height: 2rem;
  background-color: #f5222d;
  color: white;
  font-size: 1rem;
  border-radius: 0.3rem;
  text-decoration: none;
`;
