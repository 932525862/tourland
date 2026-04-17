import React from 'react'
import { useTranslation } from 'react-i18next'
import pekin from "../assets/binod.webp"
const Reservation = () => {
  const {t}=useTranslation()
  return (
    <div className='flex flex-col items-center justify-center h-[608px] bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${pekin})`}}>
        <h4 className='text-white text-center text-[14px] sm:text-xl'>{t('reservation.h4')}</h4>
        <div className='h-[2px] bg-[#fafafa] w-[100px] mt-6 mb-10'></div>
        <h2 className='sm:text-5xl text-2xl text-center font-bold text-white mb-16'>{t('reservation.h2')}</h2>
        <a href='#info' className='bg-white text-main text-[14px] rounded-3xl py-3 px-8 hover:bg-main hover:text-white transition-colors duration-300'>{t('button.discover')}</a>
    </div>
  )
}

export default Reservation