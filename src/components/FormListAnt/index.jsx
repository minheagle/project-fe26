import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import * as S from "./styles";

const FormListAnt = ({ name }) => {
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
      {(fields, { add, remove }, { errors }) => (
        <>
          {fields.map((field, index) => (
            <S.FormAnt.Item
              {...formItemLayout}
              required={false}
              key={field.key}
            >
              <S.FormAnt.Item
                {...field}
                validateTrigger={["onChange", "onBlur"]}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "Vui lòng nhập thông tin hoặc xóa trường này",
                  },
                ]}
                noStyle
              >
                <Input
                  placeholder="Nhập thông tin"
                  style={{
                    width: "90%",
                  }}
                />
              </S.FormAnt.Item>
              {fields.length > 1 ? (
                <S.MinusCircleAnt
                  className="dynamic-delete-button"
                  onClick={() => remove(field.name)}
                />
              ) : null}
            </S.FormAnt.Item>
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
            <Button
              type="dashed"
              onClick={() => {
                add("The head item", 0);
              }}
              style={{
                width: "75%",
                marginTop: "20px",
              }}
              icon={<PlusOutlined />}
            >
              Thêm 1 trường ở đầu
            </Button>
            <S.FormAnt.ErrorList errors={errors} />
          </S.FormAnt.Item>
        </>
      )}
    </S.FormAnt.List>
  );
};

export default FormListAnt;
