import { Input, Table, Space, Button } from "antd";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { ROUTES } from "../../../../constants/routes";
import {
  getProductListAllAction,
  deleteProductAction,
} from "../../../../redux/actions";

import * as S from "./ProductsManagementStyles";

const { Search } = Input;

const ProductsManagement = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { productList, deleteData } = useSelector((state) => state.product);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(getProductListAllAction());
  }, []);

  useEffect(() => {
    dispatch(getProductListAllAction());
  }, [deleteData.loading]);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProductAction({ id: id }));
  };

  const newProductList = productList.data.filter((item) => {
    return item.productName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  });

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Giá cơ bản",
      dataIndex: "standardCost",
      key: "standardCost",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Cập nhật</Button>
          <Button
            type="primary"
            danger
            onClick={() => handleDeleteProduct(record.id)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <S.ProductsContainer>
      <S.HeadList>
        <Search
          placeholder="Bạn cần tìm gì ?"
          style={{
            width: 304,
          }}
          onSearch={(value) => setKeyword(value)}
          enterButton="Tìm kiếm"
        />
        <S.CreateButton
          to={ROUTES.ADMIN.ADMIN_CREATE_PRODUCT}
          active={pathname === `${ROUTES.ADMIN.ADMIN_CREATE_PRODUCT}`}
        >
          Tạo mới
        </S.CreateButton>
      </S.HeadList>
      <Table rowKey="id" columns={columns} dataSource={newProductList} />
    </S.ProductsContainer>
  );
};

export default ProductsManagement;
