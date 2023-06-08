import styled from "styled-components";
import { Row, Button, Input } from "antd";
import { Link } from "react-router-dom";

export const RegisterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RegisterTop = styled.div`
  width: 100%;
`;

export const Title = styled(Row)`
  padding: 1rem 0;
  h1 {
    font-size: 1.5rem;
    color: #4a4a4a;
    font-weight: 700;
  }
`;

export const LogoContainer = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterLogo = styled.img`
  width: 35%;
`;

export const RegisterForm = styled.div`
  width: 100%;
  h2 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    color: #4a4a4a;
  }
`;

export const FormInput = styled(Input)`
  width: 100%;
  height: 3rem;
  background-color: #fafafa;
  border: none;
  color: #4a4a4a;
  font-weight: 400;
  &:focus {
    background-color: #fafafa;
    border: none;
    color: #4a4a4a;
  }
`;

export const RegisterButton = styled(Button)`
  width: 100%;
  height: 3rem;
  background-color: #fd2424;
  border-radius: 1.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background-color: #fd2424;
    color: #fff;
    border: none;
  }
`;

export const RegisterBottom = styled.div`
  width: 100%;
`;

export const Or = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  hr {
    width: 100%;
    height: 1px;
    background-color: #dbdbdb;
  }
`;

export const TagP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #fff;
  border: 1px solid #777;
  margin-top: 1.5rem;
  img {
    width: 1.5rem;
    margin-right: 1rem;
  }
`;

export const Decription = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  div {
    color: #777;
    margin-right: 0.5rem;
  }
`;

export const LinkLogin = styled(Link)`
  text-decoration: none;
  color: #fd2424;
  &:hover {
    color: #fd2424;
  }
`;
