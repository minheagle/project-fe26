import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const SlideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh -64px);
  background-color: #d70018;
  margin-top: 1rem;
  border-radius: 1rem;
`;

export const SlideBarTitle = styled.div`
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
  border-bottom: 0.2rem solid #fff;
`;

export const SlideBarMenu = styled.div`
  width: 100%;
  min-height: calc(100vh -64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.2rem;
`;

export const SidebarItem = styled(NavLink)`
  width: 90%;
  height: 3rem;
  display: flex;
  align-items: center;
  background-color: #d70018;
  color: #fff;
  border: none;
  text-align: left;
  padding-left: 2rem;
  border-radius: 0.5rem;
  margin: 0.2rem 0;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #ff4d4f;
    color: white;
  }

  &:focus {
    background-color: #ff4d4f;
    color: white;
  }
`;
