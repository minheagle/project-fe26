import { Button, Form, Input, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import * as S from "./styles";

const FormDoubleField = ({ name }) => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 20,
      },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 20,
        //   offset: 4,
      },
    },
  };
  return (
    <S.FormAnt.List
      name={name}
      rules={[
        {
          validator: async (_, names) => {
            if (!names || names.length < 1) {
              return Promise.reject(new Error("Vui lòng nhập thông tin"));
            }
          },
        },
      ]}
    >
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space {...formItemLayoutWithOutLabel} key={key} align="baseline">
              <S.FormAnt.Item
                {...restField}
                name={[name, "key"]}
                rules={[
                  {
                    required: true,
                    message: "Không được để trống",
                  },
                ]}
              >
                <Input placeholder="..." />
              </S.FormAnt.Item>
              <S.FormAnt.Item
                {...restField}
                name={[name, "value"]}
                rules={[
                  {
                    required: true,
                    message: "Không được để trống",
                  },
                ]}
              >
                <Input placeholder="..." />
              </S.FormAnt.Item>
              <S.MinusCircleAnt onClick={() => remove(name)} />
            </Space>
          ))}
          <S.FormAnt.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              icon={<PlusOutlined />}
              style={{
                width: "75%",
              }}
            >
              Thêm 1 trường
            </Button>
          </S.FormAnt.Item>
        </>
      )}
    </S.FormAnt.List>
  );
};

export default FormDoubleField;
