import styled from "styled-components";
import { Form } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: #3c4043 0px 1px 2px 0px;
`;

export const FormContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  background-color: #f0f0f0;
  border-radius: 1rem;
`;

export const FormAnt = styled(Form)`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const ItemLabel = styled.p`
  width: 40%;
  font-size: 24px;
  font-weight: 600;
  color: #8c8c8c;
  margin-bottom: 1rem;
`;

export const MinusCircleAnt = styled(MinusCircleOutlined)`
  position: relative;
  top: 4px;
  margin: 0 8px;
  color: #999;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #777;
  }
  /* &:disabled{

  } */
`;
