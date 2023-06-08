import {
  BsFillBellFill,
  BsGrid3X3,
  BsFillPeopleFill,
  BsFillBarChartFill,
  BsFillGearFill,
  BsFillCartCheckFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
export const Item = [
  {
    title: "CellphoneS",
    path: "/",
    icon: (
      <BiHomeAlt
        style={{
          color: "white",
          fontSize: "1.5rem",
          marginRight: "0.8rem",
        }}
      />
    ),
  },
  {
    title: "Dashboard",
    path: "/admin",
    icon: (
      <BsFillBarChartFill
        style={{
          color: "white",
          fontSize: "1.5rem",
          marginRight: "0.8rem",
        }}
      />
    ),
  },
  {
    title: "Quản lý người dùng",
    path: "/admin/users",
    icon: (
      <BsFillPeopleFill
        style={{
          color: "white",
          fontSize: "1.5rem",
          marginRight: "0.8rem",
        }}
      />
    ),
  },
  {
    title: "Quản lý sản phẩm",
    path: "/admin/products",
    icon: (
      <BsGrid3X3
        style={{
          color: "white",
          fontSize: "1.5rem",
          marginRight: "0.8rem",
        }}
      />
    ),
  },
  {
    title: "Quản lí hóa đơn",
    path: "/admin/invoices",
    icon: (
      <BsFillCartCheckFill
        style={{
          color: "white",
          fontSize: "1.5rem",
          marginRight: "0.8rem",
        }}
      />
    ),
  },
  {
    title: "Thông báo",
    path: "/admin/notifications",
    icon: (
      <BsFillBellFill
        style={{
          color: "white",
          fontSize: "1.5rem",
          marginRight: "0.8rem",
        }}
      />
    ),
  },
  {
    title: "Cài đặt",
    path: "/admin/setting",
    icon: (
      <BsFillGearFill
        style={{
          color: "white",
          fontSize: "1.5rem",
          marginRight: "0.8rem",
        }}
      />
    ),
  },
];
