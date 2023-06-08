import React from "react";
import { DataUriToImage } from "react-html5-camera-photo";

import { Rate, Image, Button, Space, Col, Card } from "antd";
import { FiHeart } from "react-icons/fi";

import * as S from "./ProductStyles";
import { convertBase64ToImage } from "../../utils/handleImageBase64";
import ImageDemo from "../../Logo/demo_image_1.jpeg";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const Product = ({ id, productName, standardCost, url, isNew }) => {
  // if (listImage) {
  //   const data = JSON.stringify(listImage[0].imageUrl);
  // }

  const navigate = useNavigate();

  const handleAddToCart = (values) => {
    console.log(values);
  };

  return (
    <S.ColAnt span={4} style={{ marginBottom: "1rem", marginTop: "1rem" }}>
      <S.CustomsLink
        to={generatePath(ROUTES.HOME.PRODUCT_DETAIL, {
          id: `${id}`,
        })}
      >
        <S.ProductWrapper>
          <S.ProductContainer>
            <S.ImgContainer>
              <S.ProductImg src={url} />
            </S.ImgContainer>
            <S.Content>
              <S.ContentTop>
                <S.ProductTitle>{productName}</S.ProductTitle>
                <S.ProductPrice>
                  Giá : {standardCost.toLocaleString()} VNĐ
                </S.ProductPrice>
              </S.ContentTop>
              <S.ContentBottom>
                <S.ProductVoucher></S.ProductVoucher>
                <S.ProductRate>
                  <Rate style={{ fontSize: 22 }} allowHalf defaultValue={3} />
                  <FiHeart style={{ fontSize: 22, color: "red" }} />
                </S.ProductRate>
                <S.ProductDetail>
                  <S.Detail>Xem chi tiết</S.Detail>
                </S.ProductDetail>
              </S.ContentBottom>
            </S.Content>
          </S.ProductContainer>
        </S.ProductWrapper>
      </S.CustomsLink>
    </S.ColAnt>
  );
};
export default Product;
