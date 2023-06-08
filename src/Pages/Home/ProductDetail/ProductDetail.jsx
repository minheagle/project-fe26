import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Card, Col, Row, Image, Button, Descriptions } from "antd";
import { BsCart } from "react-icons/bs";

import * as S from "./ProductDetailStyles";
import { getProductByIdAction, addToCartAction } from "../../../redux/actions";
import LoadingScreen from "../../../components/Loading/LoadingScreen";
import ReactQuill from "react-quill";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productInfo } = useSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(getProductByIdAction({ id: id }));
    }
  }, []);

  if (productInfo.loading) {
    return <LoadingScreen />;
  }

  const addToCart = () => {
    dispatch(
      addToCartAction({
        productId: productInfo.data.id,
        productName: productInfo.data.productName,
        price: productInfo.data.standardCost,
        quantity: 1,
      })
    );
  };

  const renderShortInformation = () => {
    return productInfo.data.listShortDescription.map((item) => {
      return (
        <S.ShortInformation key={item.id}>* {item.content}</S.ShortInformation>
      );
    });
  };

  const renderImage = () => {
    return productInfo.data.listImage.map((item) => {
      return (
        <SwiperSlide
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={item.imageUrl} />
        </SwiperSlide>
      );
    });
  };

  const renderTechnicalSpecs = () => {
    return productInfo.data.listTechnicalSpecs.map((item, index) => {
      return index % 2 === 0 ? (
        <Descriptions.Item
          key={item.id}
          label={item.nameSpecs}
          span={3}
          style={{
            backgroundColor: "#d9d9d9",
            borderRadius: "5px",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            paddingLeft: "10px",
          }}
        >
          {item.valueSpecs}
        </Descriptions.Item>
      ) : (
        <Descriptions.Item
          key={item.id}
          label={item.nameSpecs}
          span={3}
          style={{
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            paddingLeft: "10px",
          }}
        >
          {item.valueSpecs}
        </Descriptions.Item>
      );
    });
  };

  return (
    <S.Container>
      <Row>
        <Col span={24}>
          <S.ProductName>{productInfo.data.productName}</S.ProductName>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <S.ImageContent>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper2"
              style={{
                width: "100%",
                height: "400px",
              }}
            >
              {renderImage()}
            </Swiper>
          </S.ImageContent>
        </Col>
        <Col span={8}>
          <S.ProductPriceContainer>
            <S.ProductPrice>
              Giá : {productInfo.data.standardCost.toLocaleString()} VNĐ
            </S.ProductPrice>
            <S.QuantityContainer>
              <S.Quantity>
                Số lượng tồn kho : {productInfo.data.quantity}
              </S.Quantity>
            </S.QuantityContainer>
            <S.ButtonContainer>
              <Button
                type="primary"
                danger
                style={{
                  width: "70%",
                  height: "75px",
                  borderRadius: "10px",
                  fontSize: "1rem",
                }}
              >
                Mua ngay
              </Button>
              <S.AddCart
                onClick={() => {
                  addToCart();
                }}
              >
                <BsCart
                  style={{
                    color: "#d70018",
                    fontSize: "3rem",
                    marginRight: "0.15rem",
                  }}
                />
              </S.AddCart>
            </S.ButtonContainer>
            <S.ButtonContainer>
              <Button
                type="primary"
                style={{
                  width: "45%",
                  height: "75px",
                  borderRadius: "10px",
                  fontSize: "1rem",
                }}
              >
                Trả góp 0%
              </Button>
              <Button
                type="primary"
                style={{
                  width: "45%",
                  height: "75px",
                  borderRadius: "10px",
                  fontSize: "1rem",
                }}
              >
                Trả góp qua thẻ
              </Button>
            </S.ButtonContainer>
          </S.ProductPriceContainer>
        </Col>
        <Col span={8}>
          <Card
            title="Thông tin sản phẩm"
            style={{ width: "100%", borderRadius: "10px" }}
          >
            {renderShortInformation()}
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Col span={16}>
          <Card
            title="ĐẶC ĐIỂM NỔI BẬT"
            headStyle={{
              color: "#d70018",
              textAlign: "center",
              borderRadius: "1rem",
              backgroundColor: "#d9d9d9",
              fontSize: "20px",
              fontWeight: "700",
            }}
            style={{
              borderRadius: "1rem",
            }}
          >
            <ReactQuill
              value={productInfo.data.description}
              readOnly={true}
              theme={"bubble"}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Descriptions
            title="Thông số kỹ thuật"
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              paddingLeft: "20px",
            }}
          >
            {renderTechnicalSpecs()}
          </Descriptions>
        </Col>
      </Row>
    </S.Container>
  );
};

export default ProductDetail;
