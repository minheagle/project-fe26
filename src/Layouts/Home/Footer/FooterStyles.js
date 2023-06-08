import styled from "styled-components";
import { Row } from "antd";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: column;
`;

export const FooterTop = styled(Row)`
  width: 100%;
  height: 258px;
  background-color: #ffffff;
`;

export const FooterBottom = styled(Row)`
  width: 100%;
  height: 202px;
  background-color: #f8f8f8;
`;
export const FindStore = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.5rem 0;
  }
`;

export const LinkStore = styled(Link)`
  font-size: 0.8rem;
  color: #8c8c8c;
  background-color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #8c8c8c;
  }
`;

export const Credit = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LinkCredit = styled(Link)`
  width: 3.3rem;
  height: 2.3rem;
`;

export const IconCredit = styled.img`
  width: 3rem;
  height: 2rem;
  border: 1px solid #bfbfbf;
  margin: 0 0.3rem;
`;

export const HotLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin: 0.1rem 0;
    font-size: 0.8rem;
    color: #8c8c8c;
  }
`;

export const Partner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

export const PartnerIcon = styled.div`
  width: 17rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DienThoaiVui = styled(Link)`
  width: 100%;
  height: 3.2rem;
  background-color: #d70018;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    color: #fff;
  }
`;

export const ASP = styled(Link)`
  width: 100%;
  height: 3.2rem;
  background-color: #334168;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    color: #fff;
  }
`;

export const BoxLeft = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const BoxRight = styled.div`
  width: 40%;
`;

export const PartnerImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: -2rem;
  li {
    list-style: none;
    font-size: 0.8rem;
    margin: 0.1rem 0;
  }
`;

export const List2 = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: -2rem;
  li {
    list-style: none;
    font-size: 0.7rem;
    margin: 0.3rem 0;
  }
`;

export const Company = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CompanyAddress = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 0.6rem;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ChungChi = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AntRow = styled(Row)`
  width: 100%;
`;
