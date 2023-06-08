import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import AdminLayout from "./Layouts/Admin/AdminLayout";
import AdminHome from "./Pages/Admin/AdminHome/AdminHome";
import UsersManagement from "./Pages/Admin/Users/UserManagement/UsersManagement";
import CreateUser from "./Pages/Admin/Users/CreateUser/CreateUser";
import UpdateUser from "./Pages/Admin/Users/UpdateUser";
import ProductsManagement from "./Pages/Admin/Products/ProductManagement/ProductsManagement";
import CreateProduct from "./Pages/Admin/Products/CreateProduct/CreateProduct";
import InsertImageProduct from "./Pages/Admin/Products/InsertImageProduct";
import InsertInformationProduct from "./Pages/Admin/Products/InsertInformationProduct";
import InvoicesManagement from "./Pages/Admin/Invoices/InvoicesManagement";

import LoginLayout from "./Layouts/Login/Login";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

import MemberLayout from "./Layouts/Member/Member";
import MemberHomePage from "./Pages/Member/HomePageMember/HomePage";
import MemberOrder from "./Pages/Member/OrderMember/OrderMember";
import MemberPromotion from "./Pages/Member/PromotionMember/Promotion";
import MemberRank from "./Pages/Member/RankMember/Rank";
import MemberInfo from "./Pages/Member/UserInfo/UserInfo";
import ChangePassword from "./Pages/Member/ChangePassword";
import MemberSupport from "./Pages/Member/Support/Support";
import MemberFeedback from "./Pages/Member/Feedback/Feedback";

import HomeLayout from "./Layouts/Home/HomeLayout";
import HomePage from "./Pages/Home/HomePage/HomePage";

import CartLayout from "./Layouts/Cart";
import CartPage from "./Pages/Cart";

import ProductDetailLayout from "./Layouts/ProductDetail/ProductDetail";
import ProductDetail from "./Pages/Home/ProductDetail/ProductDetail";

import { ROUTES } from "./constants/routes";
import { getUserInfoAction, getCategoryListAction } from "./redux/actions";
import LoadingScreen from "./components/Loading/LoadingScreen";
import ProductByCategory from "./Pages/Home/ProductByCategory";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const decode = jwtDecode(accessToken);
      dispatch(getUserInfoAction({ id: decode.userInfo.id }));
    }

    dispatch(getCategoryListAction());
  }, []);

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path={ROUTES.HOME.HOME} element={<HomePage />} />
        <Route path={ROUTES.HOME.HOME_DIENTHOAIVUI} element={<HomePage />} />
        <Route path={ROUTES.HOME.HOME_ASP} element={<HomePage />} />
        <Route path={ROUTES.HOME.HOME_MOBILE} element={<ProductByCategory />} />
        <Route path={ROUTES.HOME.HOME_LAPTOP} element={<ProductByCategory />} />
        <Route path={ROUTES.HOME.HOME_TABLET} element={<ProductByCategory />} />
      </Route>

      <Route element={<ProductDetailLayout />}>
        <Route path={ROUTES.HOME.PRODUCT_DETAIL} element={<ProductDetail />} />
      </Route>

      <Route element={<CartLayout />}>
        <Route path={ROUTES.CART.CART_PAGE} element={<CartPage />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path={ROUTES.ADMIN.ADMIN_HOME} element={<AdminHome />} />
        <Route
          path={ROUTES.ADMIN.ADMIN_USER_LIST}
          element={<UsersManagement />}
        />
        <Route path={ROUTES.ADMIN.ADMIN_CREATE_USER} element={<CreateUser />} />
        <Route path={ROUTES.ADMIN.ADMIN_UPDATE_USER} element={<UpdateUser />} />
        <Route
          path={ROUTES.ADMIN.ADMIN_PRODUCT_LIST}
          element={<ProductsManagement />}
        />
        <Route
          path={ROUTES.ADMIN.ADMIN_CREATE_PRODUCT}
          element={<CreateProduct />}
        />
        <Route
          path={ROUTES.ADMIN.ADMIN_INSERT_IMAGE_PRODUCT}
          element={<InsertImageProduct />}
        />
        <Route
          path={ROUTES.ADMIN.ADMIN_INSERT_INFO_PRODUCT}
          element={<InsertInformationProduct />}
        />
        <Route
          path={ROUTES.ADMIN.ADMIN_INVOICE_LIST}
          element={<InvoicesManagement />}
        />
      </Route>

      <Route element={<LoginLayout />}>
        <Route path={ROUTES.LOGIN.LOGIN} element={<Login />} />
        <Route path={ROUTES.LOGIN.REGISTER} element={<Register />} />
      </Route>

      <Route element={<MemberLayout />}>
        <Route path={ROUTES.MEMBER.HOMEPAGE} element={<MemberHomePage />} />
        <Route path={ROUTES.MEMBER.ORDER} element={<MemberOrder />} />
        <Route path={ROUTES.MEMBER.PROMOTION} element={<MemberPromotion />} />
        <Route path={ROUTES.MEMBER.RANK} element={<MemberRank />} />
        <Route path={ROUTES.MEMBER.ACCOUNT_INFO} element={<MemberInfo />} />
        <Route
          path={ROUTES.MEMBER.CHANGE_PASSWORD}
          element={<ChangePassword />}
        />
        <Route
          path={ROUTES.MEMBER.ACCOUNT_SUPPORT}
          element={<MemberSupport />}
        />
        <Route
          path={ROUTES.MEMBER.ACCOUNT_FEEDBACK}
          element={<MemberFeedback />}
        />
      </Route>
    </Routes>
  );
}

export default App;
