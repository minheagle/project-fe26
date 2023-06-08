import styled from "styled-components";
import { Link } from "react-router-dom";

export const SlideBarContainer = styled.div`
  width: 100%;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-sizing: border-box;
  margin: 0.5rem;
`;

export const SlideBarItem = styled(Link)`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #343a40;
  &:hover {
    background-color: #d9d9d9;
    color: #343a40;
    border-radius: 0.8rem;
  }
`;

export const ItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 0.8rem;
    font-weight: 600;
    margin-left: 0.2rem;
  }
`;

export const ItemIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
