import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import * as S from "./styles";
import {
  getProductByIdAction,
  createImageAction,
} from "../../../../redux/actions";

import LoadingScreen from "../../../../components/Loading/LoadingScreen";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";

const InsertImageProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productInfo } = useSelector((state) => state.product);
  const { createData } = useSelector((state) => state.image);

  useEffect(() => {
    dispatch(getProductByIdAction({ id: productInfo.data.id }));
  }, []);

  if (productInfo.loading) {
    return <LoadingScreen />;
  }

  const initialValues = {
    productId: productInfo.data.id,
    listImage: [],
  };
  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleInsertImage = async (values) => {
    const { listImage } = values;

    const newListImage = [];
    for (let i = 0; i < listImage.length; i++) {
      const imgBase64 = await convertImageToBase64(listImage[i].originFileObj);
      await newListImage.push({
        name: listImage[i].name,
        type: listImage[i].type,
        thumbUrl: listImage[i].thumbUrl,
        url: imgBase64,
      });
    }
    await dispatch(
      createImageAction({
        data: {
          productId: productInfo.data.id,
          listImage: newListImage,
        },
        callback: {
          goToInsertInfo: () =>
            navigate(ROUTES.ADMIN.ADMIN_INSERT_INFO_PRODUCT),
        },
      })
    );
  };

  return (
    <S.InsertImageContainer>
      <S.FormAnt
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => handleInsertImage(values)}
      >
        <S.FormAnt.Item
          label="Ảnh :"
          name="listImage"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) return e;
            return e?.fileList;
          }}
        >
          <Upload listType="picture-card" beforeUpload={Upload.LIST_IGNORE}>
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </S.FormAnt.Item>
        <S.FormAnt.Item>
          <Button type="primary" htmlType="submit" loading={createData.loading}>
            Hoàn tất
          </Button>
        </S.FormAnt.Item>
      </S.FormAnt>
    </S.InsertImageContainer>
  );
};

export default InsertImageProduct;
