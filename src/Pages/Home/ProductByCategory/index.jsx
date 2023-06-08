import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as S from "./styles";
import Product from "../../../components/products/Product";
import SlidingBanner from "../HomePage/SlidingBanner/SlidingBanner";
import { getProductByCategoryIdAction } from "../../../redux/actions";
import { Col } from "antd";

const ProductByCategory = () => {
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const dispatch = useDispatch();
  const { productListByCategory } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductByCategoryIdAction({ data: path }));
  }, []);

  useEffect(() => {
    dispatch(getProductByCategoryIdAction({ data: path }));
  }, [path]);

  const renderProduct = (productListByCategory) => {
    return productListByCategory.data.map((item) => {
      return (
        <Product
          key={item.id}
          id={item.id}
          productName={item.productName}
          standardCost={item.standardCost}
          url={item.url}
          isNew={item.isNew}
        />
      );
    });
  };

  return (
    <S.Container>
      <S.RowAnt>
        <Col span={24}>
          <SlidingBanner />
        </Col>
      </S.RowAnt>
      <S.RowAnt>
        <S.ContentContainer>
          {renderProduct(productListByCategory)}
        </S.ContentContainer>
      </S.RowAnt>
    </S.Container>
  );
};

export default ProductByCategory;
