import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContent = styled.div`
  position: fixed;
  top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  /* margin-top: 1rem; */
  margin-bottom: 1rem;
  background-color: #d70018;
  border-radius: 0.5rem;
  z-index: 99;
`;

export const Breadcrumb = styled.p`
  font-size: 18px;
  color: #ffffff;
  line-height: 4rem;
  margin-top: 0.8rem;
  font-weight: 300;
`;

export const LogoutHeader = styled(Link)`
  width: 10rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  background-color: #262626;
  line-height: 1.2rem;
  border-radius: 0.5rem;
  &:hover {
    color: white;
  }
`;
