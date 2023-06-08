import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Card, Col } from "antd";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import SlideBar from "./SlideBar/Slidebar";
import SlidingBanner from "./SlidingBanner/SlidingBanner";
import Banner from "./Banner/Banner";
import Product from "../../../components/products/Product";
import LoadingScreen from "../../../components/Loading/LoadingScreen";
import { getProductListAllAction } from "../../../redux/actions";

import * as S from "./HomePageStyles";

const HomePage = () => {
  const dispatch = useDispatch();
  const { productList, keyword } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductListAllAction());
  }, []);

  const newProductList = productList.data.filter((item) => {
    return (
      item.productName.toLowerCase().indexOf(keyword.data.toLowerCase()) !== -1
    );
  });

  const renderProductList = (productList) => {
    return productList.map((item) => {
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
    <S.HomePageContainer>
      <S.RowAnt>
        <S.ColAnt span={4}>
          <SlideBar />
        </S.ColAnt>
        <S.ColAnt span={15}>
          <SlidingBanner />
        </S.ColAnt>
        <S.ColAnt span={5}>
          <Banner />
        </S.ColAnt>
      </S.RowAnt>
      {productList.loading ? (
        <S.RowAnt style={{ marginBottom: "1rem" }}>
          <LoadingScreen />
        </S.RowAnt>
      ) : (
        <S.RowAnt style={{ marginBottom: "1rem" }}>
          {renderProductList(newProductList)}
        </S.RowAnt>
      )}
      {/* <S.RowAnt style={{ marginBottom: "1rem" }}>
        {renderProductList(productList)}
      </S.RowAnt> */}
    </S.HomePageContainer>
  );
};

export default HomePage;
