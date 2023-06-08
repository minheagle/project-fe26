import { Button, Form } from "antd";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";

import FormListAnt from "../../../../components/FormListAnt";
import FormDoubleField from "../../../../components/FormDoubleFiled";
import {
  getProductByIdAction,
  createInformationAction,
} from "../../../../redux/actions";

import * as S from "./styles";
import { useDispatch } from "react-redux";
import { ROUTES } from "../../../../constants/routes";

const InsertInformationProduct = () => {
  const [informationForm] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productInfo } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductByIdAction({ id: productInfo.data.id }));
  }, []);

  const handleInsertInformation = (values) => {
    dispatch(
      createInformationAction({
        data: {
          productId: productInfo.data.id,
          listSalientFeature: values.listSalientFeature,
          listShortDescription: values.listShortDescription,
          listTechnicalSpecs: values.listTechnicalSpecs,
          description: values.description,
        },
        callback: {
          goToProductList: () => navigate(ROUTES.ADMIN.ADMIN_PRODUCT_LIST),
        },
      })
    );
  };
  return (
    <S.Container>
      <S.FormContainer>
        <S.FormAnt
          form={informationForm}
          name="infomationForm"
          layout="vertical"
          onFinish={(values) => handleInsertInformation(values)}
        >
          <S.ItemContainer>
            <S.ItemLabel>Tính năng nổi bật :</S.ItemLabel>
            <FormListAnt name="listSalientFeature" />
          </S.ItemContainer>
          <S.ItemContainer>
            <S.ItemLabel>Thông tin sản phẩm :</S.ItemLabel>
            <FormListAnt name="listShortDescription" />
          </S.ItemContainer>
          <S.ItemContainer>
            <S.ItemLabel>Thông số kỹ thuật :</S.ItemLabel>
            <FormDoubleField name="listTechnicalSpecs" />
          </S.ItemContainer>
          <S.ItemContainer>
            <S.ItemLabel>Mô tả sản phẩm :</S.ItemLabel>
            <S.FormAnt.Item name="description">
              <ReactQuill
                theme="snow"
                onChange={(value) =>
                  informationForm.setFieldsValue({ description: value })
                }
              />
            </S.FormAnt.Item>
          </S.ItemContainer>
          <S.FormAnt.Item>
            <Button type="primary" htmlType="submit">
              Hoàn tất
            </Button>
          </S.FormAnt.Item>
        </S.FormAnt>
      </S.FormContainer>
    </S.Container>
  );
};

export default InsertInformationProduct;
