import * as S from "./SlidingBannerStyles";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, Pagination, FreeMode, Navigation, Thumbs } from "swiper";

import EventSale1 from "../../../../Logo/event-sale-1.png";
import EventSale2 from "../../../../Logo/event-sale-2.png";
import EventSale3 from "../../../../Logo/event-sale-3.png";
import EventSale4 from "../../../../Logo/event-sale-4.png";
import EventSale5 from "../../../../Logo/event-sale-5.png";
import EventSale6 from "../../../../Logo/event-sale-6.png";
import EventSale7 from "../../../../Logo/event-sale-7.png";
import EventSale8 from "../../../../Logo/event-sale-8.png";
import EventSale9 from "../../../../Logo/event-sale-9.png";
import EventSale10 from "../../../../Logo/event-sale-10.png";

const SlidingBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <S.SlidingContainer>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, Pagination, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={EventSale1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale10} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={EventSale1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EventSale10} />
        </SwiperSlide>
      </Swiper>
    </S.SlidingContainer>
  );
};

export default SlidingBanner;
