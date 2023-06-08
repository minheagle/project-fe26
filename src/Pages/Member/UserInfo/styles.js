import styled from "styled-components";
import { Form } from "antd";
import { Link } from "react-router-dom";

export const UserInfoContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: #3c4043 0px 1px 2px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderFrom = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const UserName = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;

export const FormAnt = styled(Form)`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const CustomLink = styled(Link)`
  width: 70%;
  height: 3rem;
  background-color: #fd2424;
  text-decoration: none;
  border-radius: 1.5rem;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 3rem;
  color: #fff;
  margin-bottom: 2rem;
  &:hover {
    color: #fff;
  }
`;
