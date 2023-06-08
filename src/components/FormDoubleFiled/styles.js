import styled from "styled-components";
import { Form } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";

export const FormAnt = styled(Form)`
  width: 100%;
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
