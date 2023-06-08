import React from "react";
import { Col } from "antd";
import { useLocation } from "react-router-dom";
import Ale from "../../../Logo/alepay-logo.png";
import Zalo from "../../../Logo/zalopay-logo.png";
import VNPay from "../../../Logo/vnpay-logo.png";
import Moca from "../../../Logo/moca-logo.png";
import OnePay from "../../../Logo/onepay-logo.png";
import Kredivo from "../../../Logo/kredivo-logo.png";
import Mpos from "../../../Logo/mpos-logo.png";
import DienThoaiVui from "../../../Logo/dienthoaivui.png";
import ASP from "../../../Logo/asp.png";
import BCT from "../../../Logo/BCT.png";
import DMCA from "../../../Logo/dmca.png";

import { ROUTES } from "../../../constants/routes";

import * as S from "./FooterStyles";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <S.FooterContainer>
      <S.FooterTop>
        <Col span={2}></Col>
        <Col span={5}>
          <S.FindStore>
            <h2>Tìm cửa hàng</h2>
            <S.LinkStore
              to="/dia-chi-cua-hang"
              active={pathname === "/dia-chi-cua-hang"}
            >
              Tìm cửa hàng gần nhất
            </S.LinkStore>
            <S.LinkStore
              to="/chinh-sach-giao-hang"
              active={pathname === "/chinh-sach-giao-hang"}
            >
              Mua hàng từ xa
            </S.LinkStore>
            <S.LinkStore
              to="/dia-chi-cua-hang"
              active={pathname === "/dia-chi-cua-hang"}
            >
              Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
            </S.LinkStore>
            <h2>Phương thức thanh toán</h2>
          </S.FindStore>
          <S.Credit>
            <S.IconCredit src={Ale} />
            <S.IconCredit src={Zalo} />
            <S.IconCredit src={VNPay} />
            <S.IconCredit src={Moca} />
            <S.IconCredit src={OnePay} />
            <S.IconCredit src={Kredivo} />
            <S.IconCredit src={Mpos} />
          </S.Credit>
        </Col>
        <Col span={5}>
          <S.HotLine>
            <p>
              Gọi mua hàng <strong>1800.2097</strong>(8h00 - 22h00)
            </p>
            <p>
              Gọi bảo hành <strong>1800.2064</strong>(8h00 - 21h00)
            </p>
            <p>
              Gọi khiếu nại <strong>1800.2063</strong>(8h00 - 21h30)
            </p>
          </S.HotLine>
          <S.Partner>
            <S.PartnerIcon>
              <S.DienThoaiVui
                to={ROUTES.HOME.HOME_DIENTHOAIVUI}
                active={pathname === `${ROUTES.HOME.HOME_DIENTHOAIVUI}`}
              >
                <S.BoxLeft>
                  <p>
                    <strong>Đối tác dịch vụ bảo hành</strong>
                    Điện thoại - Máy tính
                  </p>
                </S.BoxLeft>
                <S.BoxRight>
                  <S.PartnerImage src={DienThoaiVui} />
                </S.BoxRight>
              </S.DienThoaiVui>
              <S.ASP
                to={ROUTES.HOME.HOME_ASP}
                active={pathname === `${ROUTES.HOME.HOME_ASP}`}
              >
                <S.BoxLeft>
                  <p>
                    <strong>Trung tâm bảo hành ủy quyền Apple</strong>
                  </p>
                </S.BoxLeft>
                <S.BoxRight>
                  <S.PartnerImage src={ASP} />
                </S.BoxRight>
              </S.ASP>
            </S.PartnerIcon>
          </S.Partner>
        </Col>
        <Col span={5}>
          <S.List>
            <li>Mua hàng và thanh toán Online</li>
            <li>Mua hàng trả góp Online</li>
            <li>Tra thông tin đơn hàng</li>
            <li>Tra điểm Smember</li>
            <li>Tra thông tin bảo hành</li>
            <li>Tra cứu hoá đơn điện tử</li>
            <li>Trung tâm bảo hành chính hãng</li>
            <li>Quy định về việc sao lưu dữ liệu</li>
            <li>Dịch vụ bảo hành điện thoại</li>
          </S.List>
        </Col>
        <Col span={5}>
          <S.List>
            <li>Khách hàng doanh nghiệp (B2B)</li>
            <li>Ưu đãi thanh toán</li>
            <li>Quy chế hoạt động</li>
            <li>Chính sách Bảo hành</li>
            <li>Liên hệ hợp tác kinh doanh</li>
            <li>Tuyển dụng</li>
          </S.List>
        </Col>
        <Col span={2}></Col>
      </S.FooterTop>
      <S.FooterBottom>
        <S.AntRow>
          <Col span={2}></Col>
          <Col span={5}>
            <S.List2>
              <li>Điện thoại iPhone</li>
              <li>Điện thoại iPhone 13 – Điện thoại iPhone 13 Pro Max</li>
              <li>Điện thoại iPhone 12 – Điện thoại iPhone 11</li>
              <li>iPhone cũ giá rẻ – iPhone 13 cũ – iPhone 12 cũ</li>
            </S.List2>
          </Col>
          <Col span={5}>
            <S.List2>
              <li>Điện thoại Samsung</li>
              <li>Điện thoại Samsung S22 – Samsung A73</li>
              <li>Samsung A13 – Samsung A53 – Samsung A23</li>
              <li>Điện thoại OPPO – Điện thoại Xiaomi</li>
            </S.List2>
          </Col>
          <Col span={5}>
            <S.List2>
              <li>Máy tính Laptop</li>
              <li>Laptop HP – Laptop Dell – Laptop Microsoft Surface</li>
              <li>Laptop Acer – Laptop Lenovo – Laptop ASUS</li>
              <li>Máy tính để bàn – Màn hình máy tính</li>
            </S.List2>
          </Col>
          <Col span={5}>
            <S.List2>
              <li>Phụ kiện - Nhà thông minh</li>
              <li>Robot hút bụi Xiaomi – Robot hút bụi Ecovas</li>
              <li>Máy hút bụi – Máy hút bụi cầm tay</li>
              <li>Camera – Ghế công thái học</li>
            </S.List2>
          </Col>
          <Col span={2}></Col>
        </S.AntRow>
        <S.AntRow>
          <S.Company>
            <S.CompanyAddress>
              <p>
                Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
                0316172372 do sở KH &amp; ĐT TP. HCM cấp ngày 02/03/2020. Địa
                chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ
                Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.
              </p>
            </S.CompanyAddress>
            <S.ChungChi>
              <img src={BCT} />
              <img src={DMCA} />
            </S.ChungChi>
          </S.Company>
        </S.AntRow>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};

export default Footer;
