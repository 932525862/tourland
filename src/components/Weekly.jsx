import React from "react";
import { Carousel } from "@material-tailwind/react";
import Container from "../utils/Utils";
import { Swiper, SwiperSlide } from "swiper/react";
import panda from "../assets/panda.jpg"
import xitoy1 from "../assets/xitoy1.jpg"
import xitoy2 from "../assets/xitoy2.jpg"
import zanjen from "../assets/zanjen.jpg"
import togq from "../assets/togq.jpeg"
import ftoq from "../assets/ftoq.jpeg"
import hanji from "../assets/banbuk1.jpeg"
import koprik from "../assets/koprik.webp"

import "./Alll.css"


import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination,FreeMode } from 'swiper/modules';
import WeeklyCard from "./WeeklyCard";
import { useTranslation } from "react-i18next";

const Weekly = () => {
  const {t} =useTranslation()
  return (
    <div id="weekly" className="mb-10 mt-24">
      <Container>
        <div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2A2A2A]">{t('weekly.h2')}</h2>
          <p className="text-center text-[12px] sm:text-[15px] text-[#01294c] max-w-[627px] mx-auto mt-6 mb-20">
            {t('weekly.p')}
          </p>
          <Swiper
            breakpoints={{
              360:{
                width:360,
                slidesPerView:1,
              },
            460:{
                width:460,
                slidesPerView:1,
            },
            560:{
                width:560,
                slidesPerView:1,
            },
            760:{
                width:760,
                slidesPerView:3,
            },
            }}
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{
              clickable: true,
            }}
            freeMode={false}
            modules={[Autoplay, Pagination, FreeMode]}
            className="h-[495px]"
          >
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" >
		<img  src={panda} alt="" className="swprimg" />
      
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl">
	<img  src={xitoy1} alt="" className="swprimg"/>
	 
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" >
	<img  src={xitoy2} alt="" className="swprimg"/>
	
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" >
	<img  src={zanjen} alt="" className="swprimg"/>
	
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2x">
	<img  src={togq} alt="" className="swprimg"/>
	  
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" >
	<img  src={ftoq} alt="" className="swprimg"/>
	  
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" >
	<img  src={hanji} alt="" className="swprimg"/>
	
    </div>
  </SwiperSlide>
  <SwiperSlide className="weekly-swiper-slide">
    <div className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl" >
	<img  src={koprik} alt="" className="swprimg" />
	  
    </div>
  </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Weekly;
