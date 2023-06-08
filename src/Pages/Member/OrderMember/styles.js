import styled from "styled-components";

export const OrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: #3c4043 0px 1px 2px 0px;
`;

export const OrderTop = styled.div`
  width: 100%;
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 100%;
  height: 4rem;
  text-align: center;
  color: #fd2424;
  font-size: 20px;
  font-weight: 600;
  line-height: 4rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentItem = styled.div`
  width: 50%;
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  object-fit: cover;
`;

export const OrderBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
