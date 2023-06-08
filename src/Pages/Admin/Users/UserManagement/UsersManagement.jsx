import { Input, Table, Button, Space } from "antd";
import { useNavigate, useLocation, generatePath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { ROUTES } from "../../../../constants/routes";
import { getUserListAction, deleteUserAction } from "../../../../redux/actions";

import * as S from "./UsersManagementStyles";

const { Search } = Input;
const { Column } = Table;

const UsersManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userList, deleteData } = useSelector((state) => state.user);

  const [keyword, setKeyword] = useState("");

  const newUserList = userList.data.filter((item) => {
    return (
      item.fullName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
      item.email.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    );
  });

  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  useEffect(() => {
    dispatch(getUserListAction());
  }, [deleteData.loading]);

  const handleDeleteUser = (id) => {
    dispatch(deleteUserAction({ id: id }));
  };

  const dataColumn = [
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "userRole",
      key: "userRole",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">
            <S.EditLink
              to={generatePath(ROUTES.ADMIN.ADMIN_UPDATE_USER, {
                id: `${record.id}`,
              })}
            >
              Cập nhật
            </S.EditLink>
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => handleDeleteUser(record.id)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <S.UsersContainer>
      <S.HeadList>
        <Search
          placeholder="Bạn cần tìm gì ?"
          style={{
            width: 304,
          }}
          onSearch={(e) => setKeyword(e)}
          enterButton="Tìm kiếm"
        />
        <S.CreateButton
          to={ROUTES.ADMIN.ADMIN_CREATE_USER}
          active={pathname === `${ROUTES.ADMIN.ADMIN_CREATE_USER}`}
        >
          Tạo mới
        </S.CreateButton>
      </S.HeadList>
      <Table rowKey="id" columns={dataColumn} dataSource={newUserList} />
    </S.UsersContainer>
  );
};

export default UsersManagement;
