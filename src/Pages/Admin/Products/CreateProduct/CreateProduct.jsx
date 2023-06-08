import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Form, Input, Select, InputNumber, Checkbox } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import {
  createProductAction,
  getSeriesListAction,
  getBrandListAction,
  getBrandByCategoryIdAction,
  getSeriesByBrandIdAction,
  getCategoryListAction,
} from "../../../../redux/actions";

import * as S from "./CreateProductStyles";
import IconCellphoneS from "../../../../Logo/cellphones-icon.png";
import LoadingScreen from "../../../../components/Loading/LoadingScreen";
import { ROUTES } from "../../../../constants/routes";

const { Option } = Select;

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryList } = useSelector((state) => state.category);
  const { brandList } = useSelector((state) => state.brand);
  const { seriesList } = useSelector((state) => state.series);
  const { createData } = useSelector((state) => state.product);

  const [categoryId, setCategoryId] = useState(0);
  const [brandId, setBrandId] = useState(0);

  useEffect(() => {
    dispatch(getCategoryListAction());
    dispatch(getSeriesListAction());
    dispatch(getBrandListAction());
  }, []);

  if (seriesList.loading) {
    return <LoadingScreen />;
  }

  const newBrandList = brandList.data.filter((item) => {
    return item.categoryId === categoryId;
  });

  const newSeriesList = seriesList.data.filter((item) => {
    return item.brandId === brandId;
  });

  const renderCategoryOption = () => {
    return categoryList.data.map((category) => {
      return (
        <Option key={category.id} value={category.id}>
          {category.categoryName}
        </Option>
      );
    });
  };

  const renderBrandOption = () => {
    return newBrandList.map((brand) => {
      return (
        <Option key={brand.id} value={brand.id}>
          {brand.brandName}
        </Option>
      );
    });
  };

  const renderSeriesOption = () => {
    return newSeriesList.map((series) => {
      return (
        <Option key={series.id} value={series.id}>
          {series.seriesName}
        </Option>
      );
    });
  };

  const initialValues = {
    productName: "",
    standardCost: undefined,
    quantity: undefined,
    categoryId: undefined,
    brandId: undefined,
    seriesId: undefined,
    isNew: undefined,
  };

  const handleCreateProduct = (values) => {
    dispatch(
      createProductAction({
        data: {
          productName: values.productName,
          standardCost: values.standardCost,
          quantity: values.quantity,
          categoryId: values.categoryId,
          brandId: values.brandId,
          seriesId: values.seriesId,
          isNew: values.isNew || false,
        },
        callback: {
          goToInsertImage: () =>
            navigate(ROUTES.ADMIN.ADMIN_INSERT_IMAGE_PRODUCT),
        },
      })
    );
  };

  return (
    <S.CreateContainer>
      <S.HeaderFrom>
        <S.ImageContainer>
          <S.Image src={IconCellphoneS} />
        </S.ImageContainer>
        <S.Title>Tạo sản phẩm mới</S.Title>
      </S.HeaderFrom>
      <S.FormAnt
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => handleCreateProduct(values)}
      >
        <Form.Item label="Tên sản phẩm :" name="productName">
          <Input />
        </Form.Item>
        <Form.Item label="Danh mục :" name="categoryId">
          <Select
            initialValues="Chọn danh mục"
            onChange={(value) => setCategoryId(value)}
          >
            {renderCategoryOption()}
          </Select>
        </Form.Item>
        <Form.Item label="Thương hiệu :" name="brandId">
          <Select
            initialValues="Chọn danh mục"
            onChange={(value) => setBrandId(value)}
          >
            {renderBrandOption()}
          </Select>
        </Form.Item>
        <Form.Item label="Dòng sản phẩm :" name="seriesId">
          <Select initialValue="Chọn dòng sản phẩm">
            {renderSeriesOption()}
          </Select>
        </Form.Item>
        <Form.Item label="Giá cơ bản :" name="standardCost">
          <InputNumber
            formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item label="Số lượng :" name="quantity">
          <Input />
        </Form.Item>
        <Form.Item name="isNew" valuePropName="checked">
          <Checkbox>Sản phẩm mới</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={createData.loading}>
            Hoàn tất
          </Button>
        </Form.Item>
      </S.FormAnt>
    </S.CreateContainer>
  );
};

export default CreateProduct;
