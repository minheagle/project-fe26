import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const SlideBarContent = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 15%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #d70018;
  /* margin-top: 1rem; */
  border-radius: 1rem;
  z-index: 99;
`;

export const SlideBarTitle = styled.div`
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
  border-bottom: 0.2rem solid #fff;
`;

export const SlideBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 0.2rem;
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d70018;
  color: #fff;
  border: none;
  text-align: left;
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

export const SidebarItem = styled(NavLink)`
  width: 90%;
  height: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  color: #fff;
  &:hover {
    background-color: #ff4d4f;
    color: white;
  }

  &:focus {
    /* background-color: #08979c; */
    color: white;
    background-color: #ff4d4f;
  }
  /* background-color: #262626;
  border: none;
  text-align: left;
  border-radius: 0.5rem;
  margin: 0.2rem 0;
  cursor: pointer;
*/
`;

export const LogoutButton = styled.button`
  width: 90%;
  height: 3rem;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  background-color: #d70018;
  border: none;
  &:hover {
    background-color: #ff4d4f;
    color: white;
  }

  &:focus {
    background-color: #ff4d4f;
    color: white;
  }
`;
