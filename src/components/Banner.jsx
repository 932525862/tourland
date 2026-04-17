import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import istanbul from "../assets/xitoy2.jpg";

import "swiper/css";
import "swiper/css/pagination";

import {Autoplay, Pagination, FreeMode} from "swiper/modules";
import {useTranslation} from "react-i18next";
import BannerContent from "./BannerContent";


const Banner = () => {
  const {t} = useTranslation();
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={19}
        pagination={{
          clickable: true,
        }}
        freeMode={false}
        modules={[Autoplay, Pagination, FreeMode]}
        className="h-[89vh] w-full max-w-[1900px]"
      >
        <SwiperSlide
          style={{backgroundImage: `url(${istanbul})`}}
          className="flex flex-col items-center justify-center w-full h-full bg-slate-600 bg-cover bg-center bg-no-repeat filter brightness-75 contrast-125"
        >
          <BannerContent
            h1_text={t("banner1.h1")}
            h2_text={t("banner1.h2")}
            population={"44.48"}
            territory={"77.8"}
            avgPrice={"800"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
