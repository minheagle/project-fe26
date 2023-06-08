import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fef5f0;
  border-radius: 10px;
`;

export const Top = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerIcon = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background-color: #f0e89d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const P1 = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 550;
  font-family: sans-serif;
  color: #fd2424;
`;

export const P2 = styled.p`
  text-align: center;
  font-size: 16px;
  color: #777777;
`;

export const Button = styled.button`
  width: 175px;
  height: 50px;
  border-radius: 15px;
  background-color: #ffd9d9;
  color: #fd2424;
  margin-top: 30px;
  border: none;
`;
