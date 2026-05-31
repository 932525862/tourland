import React from "react";
import { useTranslation } from "react-i18next";
import { PiUsersThreeFill, PiTag, PiClock, PiCheckCircle } from "react-icons/pi";

const VisaCard = ({ tour, openModal }) => {
  const { t, i18n } = useTranslation();
  if (!tour) return null;

  const currentLang = i18n.language === 'en' ? 'En' : i18n.language === 'ru' ? 'Ru' : 'Uz';
  const name = tour[`name${currentLang}`] || tour.nameUz;

  return (
    <div className="shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-7 absolute rounded-[40px] bg-white sm:w-[340px] w-[280px] -bottom-20 sm:right-0 right-1/2 translate-x-1/2 sm:translate-x-0 border border-white/20 backdrop-blur-sm">
      <div className="mb-5">
        <h3 className="font-black text-2xl text-[#1A1A1A] mb-2 tracking-tight leading-none">{name}</h3>
        <div className="flex items-center gap-2 text-[#999999] font-bold text-[13px]">
          <PiUsersThreeFill className="text-xl text-[#9CD1EC]" />
          <span>{tour.orders} Buyurtmalar</span>
        </div>
      </div>
      
      <div className="w-full h-[1px] bg-[#F0F0F0] mb-6"></div>
      
      <div className="space-y-4 mb-8">
        <h5 className="font-extrabold text-[14px] text-[#1A1A1A] uppercase tracking-wider">Bizning xizmatlar:</h5>
        <div className="flex flex-col gap-4">
          {tour.services?.slice(0, 3).map((svc, i) => {
            const svcName = i18n.language === 'en' ? svc.nameEn : i18n.language === 'ru' ? svc.nameRu : svc.nameUz;
            const icons = [
              <PiTag className="text-lg text-[#9CD1EC]" />,
              <PiClock className="text-lg text-[#9CD1EC]" />,
              <PiCheckCircle className="text-lg text-[#9CD1EC]" />
            ];
            return (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-0.5">{icons[i % 3]}</div>
                <span className="text-[#666666] font-semibold text-[14px] leading-tight break-words overflow-hidden">
                  {svcName}
                </span>
              </div>
            );
          })}
          {(!tour.services || tour.services.length === 0) && (
            <>
              <div className="flex items-start gap-4">
                <PiTag className="text-lg text-[#9CD1EC] mt-0.5" />
                <span className="text-[#666666] font-semibold text-[14px]">Eng arzon narxlar</span>
              </div>
              <div className="flex items-start gap-4">
                <PiClock className="text-lg text-[#9CD1EC] mt-0.5" />
                <span className="text-[#666666] font-semibold text-[14px]">Tezkor ishlash vaqti</span>
              </div>
              <div className="flex items-start gap-4">
                <PiCheckCircle className="text-lg text-[#9CD1EC] mt-0.5" />
                <span className="text-[#666666] font-semibold text-[14px]">Ishonchli yordam</span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-full">
        <button 
          onClick={tour.link ? undefined : openModal}
          className="w-full bg-[#9CD1EC] hover:bg-[#7FB8D4] hover:shadow-lg hover:shadow-[#9CD1EC]/30 text-[#1A1A1A] font-black text-[15px] rounded-[20px] py-4 transition-all duration-300 active:scale-[0.97]"
        >
          {tour.link ? (
            <a href={tour.link} className="block w-full h-full">Joy Band Qilish</a>
          ) : (
            "Joy Band Qilish"
          )}
        </button>
      </div>
    </div>
  );
};

export default VisaCard;
