import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaUser,FaGlobe,FaHouse   } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const DestinationCard = ({img,title,subtitle,parag,population,territory,price}) => {
    const {t} =useTranslation()
  return (
    <div className='flex flex-col md:flex-row gap-x-9 mb-10'>
        <div className='h-[370px] md:h-[227px] md:w-[30%] rounded-3xl overflow-hidden'>
            <img src={img} alt="" className='w-full h-full object-cover object-center'/>
        </div>

        <div className='md:w-[60%] mt-12 md:mt-0'>
            <div className='flex items-center justify-between'>
                <h3 className='sm:text-xl text-[18px] max-w- text-[#2A2A2A] font-bold'>{title}</h3>

                <button className='bg-main text-white rounded-3xl py-3 px-5 sm:px-10 sm:text-[14px] text-[12px] hover:bg-white hover:border-main border-[1px] hover:text-main transition-colors duration-500'><a style={{ color: '#01294c' }} href="#info">{t('button.explore')}</a></button>
            </div>
            <p className='text-[15px] text-[#AFAFAF] my-8 md:mb-4 md:mt-0'>{subtitle}</p>
            <p className='text-[15px] text-[#AFAFAF] leading-8'>{parag}</p>
            {
                population&&
                <>
                    <div className='mt-6 w-full h-[1px] bg-[#eeeeee]'></div>
                    <div className='flex justify-between'>
                        <p className='flex items-center gap-2 text-[#afafaf] text-[14px] my-4'>
                            <FaUser/> {population} {t('visitCard.mil')} 
                        </p>
                        <p className='flex items-center gap-2 text-[#afafaf] text-[14px] my-4'>
                            <FaGlobe/> {territory} {t('visitCard.km')}<sup>2</sup> 
                        </p>
                        <p className='flex items-center gap-2 text-[#afafaf] text-[14px] my-4'>
                            <FaHouse/> ${price} 
                        </p>
                    </div>
                    <div className='mb-6 w-full h-[1px] bg-[#eeeeee]'></div>
                    <button className='flex items-center gap-2 text-main font-bold group'><a className='flex items-center gap-2' href="#info">{t('button.direction')} <MdOutlineArrowRightAlt className='text-2xl transform transition-transform duration-300 group-hover:translate-x-2'/></a></button>
                </>
            }
        </div>
    </div>
  )
}

export default DestinationCard