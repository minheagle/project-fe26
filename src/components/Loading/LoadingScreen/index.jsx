import ReactLoading from "react-loading";
import { Container } from "react-bootstrap";
import * as S from "./styles";

const LoadingScreen = () => {
  return (
    <Container fluid>
      <S.LoadingContainer>
        <ReactLoading />
      </S.LoadingContainer>
    </Container>
  );
};

export default LoadingScreen;
