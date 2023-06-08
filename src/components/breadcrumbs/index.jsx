import { Breadcrumb } from "antd";

const Breadcrumbs = (breadcrumb) => {
  return <Breadcrumb separator=">" itemRender={breadcrumb} />;
};

export default Breadcrumbs;
