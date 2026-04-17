import React from "react";
import { useTranslation } from "react-i18next";
import { IoIosPricetags, IoIosTime, IoMdCheckmark } from "react-icons/io";
import { PiUsersThreeFill } from "react-icons/pi";
import ContactModal from "./ContactModal";
import useShareStore from "../Store/Store";

const WeeklyCard = ({ country, checks,openModal }) => {
  const { t } = useTranslation();
  return (
    <div className="shadow-card sm:p-5 p-3 absolute rounded-3xl bg-white sm:w-[320px] w-[270px] -bottom-12 right-14 sm:right-3">
      <div className="flex justify-between items-center">
        <h3 className="font-extrabold text-lg text-[#2A2A2A]">{country}</h3>
      </div>
      <div className="flex justify-between items-center mt-1">
        <p className="flex items-center gap-1 text-[#AFAFAF] text-[15px]">
          <PiUsersThreeFill className="text-[24px]" />
          {checks} {t('checks.ins')}
        </p>
      </div>
      <div className="w-full h-[2px] bg-[#AFAFAF] my-5"></div>
      <div className="text-[14px] flex flex-col gap-3">
        <h5 className="font-bold">{t('visaCard.h5')}</h5>
        <p className="flex items-center gap-1 text-[#AFAFAF]">
          <IoIosPricetags /> {t('visaCard.p1')}
        </p>
        <p className="flex items-center gap-1 text-[#AFAFAF]">
          <IoIosTime /> {t('visaCard.p2')}
        </p>
        <p className="flex items-center gap-1 text-[#AFAFAF]">
          <IoMdCheckmark /> {t('visaCard.p3')}
        </p>
      </div>
      <div className="w-full text-center">
        <button
          onClick={openModal}
          className="bg-main w-full text-white rounded-3xl py-3 text-[14px] mt-5 hover:bg-white hover:border-main border-[1px] hover:text-main transition-colors duration-500"
          style={{ color: '#01294c' }}
        >
          {t('button.reservation.1')}
        </button>
      </div>
    </div>
  );
};

export default WeeklyCard;
