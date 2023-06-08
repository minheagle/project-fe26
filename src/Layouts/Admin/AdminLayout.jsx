import { Container, Row, Col } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import SlideBar from "./SlideBar/SlideBar";
import Header from "./Header/Header";
import FakeHeaderAdmin from "../../components/FakeHeaderAdmin";
import FakeSlideBarAdmin from "../../components/FakeSlideBarAdmin";
import { ROUTES } from "../../constants/routes";
import LoadingScreen from "../../components/Loading/LoadingScreen";

const AdminLayout = () => {
  const { userInfo } = useSelector((state) => state.user);
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken && userInfo.loading) {
    return <LoadingScreen />;
  } else if (userInfo.data.userRole !== "admin") {
    return <Navigate to={ROUTES.HOME.HOME} />;
  }

  return (
    <Container
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minbreakpoint="xxs"
      fluid
    >
      <Row>
        <Col xs={2} style={{ position: "relative" }}>
          <SlideBar />
          <FakeSlideBarAdmin />
        </Col>
        <Col xs={10}>
          <Row style={{ position: "relative" }}>
            <Header />
            <FakeHeaderAdmin />
          </Row>
          <Row>
            <Outlet />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;
