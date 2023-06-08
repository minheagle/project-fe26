import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 24rem;
  box-sizing: border-box;
  margin: 0.5rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BannerItem = styled.div`
  width: 100%;
  height: 30%;
  border-radius: 0.8rem;
  margin-left: 1rem;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageItem = styled.img`
  width: 100%;
  object-fit: cover;
`;
