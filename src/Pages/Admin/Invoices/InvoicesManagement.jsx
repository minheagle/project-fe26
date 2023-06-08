import React, { useState } from "react";
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";

import * as S from "./InvoicesManagementStyles";

const { Search } = Input;

const InvoicesManagement = () => {
  return (
    <S.InvoicesContainer>
      <S.HeadList>
        <Search
          placeholder="Input search text"
          style={{
            width: 304,
          }}
          enterButton
        />
        <S.CreateButton>Create</S.CreateButton>
      </S.HeadList>
    </S.InvoicesContainer>
  );
};

export default InvoicesManagement;
