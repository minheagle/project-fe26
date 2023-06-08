import React from "react";

import { BsFillPersonFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

import * as S from "./HeaderStyles";

const AdminHeader = () => {
  const location = useLocation();
  const itemBreadcrumb = location.pathname.split("/");
  let breadcrumbs = "";
  itemBreadcrumb.forEach((item) => {
    if (item === "") {
      item = "Home";
      return (breadcrumbs += item);
    }
    const newItem = " > " + item;
    breadcrumbs += newItem;
  });

  return (
    <S.HeaderContent>
      <S.Breadcrumb>{breadcrumbs}</S.Breadcrumb>
    </S.HeaderContent>
  );
};

export default AdminHeader;
