import React, { useEffect } from "react";
import Container from "../utils/Utils";
import { Swiper, SwiperSlide } from "swiper/react";
import xdevor1 from "../assets/ftoq.jpeg";


import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import VisaCard from "./VisaCard";
import { useTranslation } from "react-i18next";
import ContactModal from "./ContactModal";
import { api } from "../api/axios";
import useShareStore from "../Store/Store";


const Visa = () => {
  const { t } = useTranslation();
  const { isModal, setIsModal } = useShareStore();
  const [tours, setTours] = React.useState([]);

  React.useEffect(() => {
    api.get("/api/tours")
      .then(res => {
        const responseData = res.data;
        const toursData = Array.isArray(responseData)
          ? responseData
          : Array.isArray(responseData?.data)
          ? responseData.data
          : [];

        setTours(toursData);
      })
      .catch(err => console.error(err));
  }, []);

  const closeModal = () => {
    setIsModal(false);
  };

  const openModal = () => {
    setIsModal(true);
  };

  return (
    <div className="mb-10 mt-24">
      <Container>
        {isModal && <ContactModal closeModal={closeModal} />}
        <div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
            {t("visa.h2")}
          </h2>
          <p className="text-center text-[12px] sm:text-[15px] text-[#AFAFAF] max-w-[627px] mx-auto mt-6 mb-20">
            {t("visa.p")}
          </p>
          <Swiper
            breakpoints={{
              360: {
                width: 360,
                slidesPerView: 1,
              },
              460: {
                width: 460,
                slidesPerView: 1,
              },
              560: {
                width: 560,
                slidesPerView: 1,
              },
              760: {
                width: 760,
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            slidesPerView={3}
            loop={tours.length > 3}
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
            {Array.isArray(tours) && tours.map((tour) => (
              <SwiperSlide key={tour.id} className="visa-swiper-slide">
                <div
                  className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl"
                  style={{ 
                    backgroundImage: `url(${tour.imageUrl ? (tour.imageUrl.startsWith('http') ? tour.imageUrl : `${import.meta.env.VITE_API_BASE_URL}${tour.imageUrl}`) : xdevor1})`, 
                    width: "100%",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <VisaCard tour={tour} openModal={openModal} />
                </div>
              </SwiperSlide>
            ))}

            {tours.length === 0 && (
              <SwiperSlide className="visa-swiper-slide">
                <div
                  className="relative bg-contain bg-no-repeat min-h-[400px] max-h-[400px] rounded-t-2xl rounded-bl-2xl flex items-center justify-center bg-secondary/20"
                  style={{ backgroundImage: `url(${xdevor1})`, width: "100%", backgroundSize: 'cover' }}
                >
                  <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl">
                    <p className="text-white font-black">Yangi manzillar tez kunda...</p>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Visa;
