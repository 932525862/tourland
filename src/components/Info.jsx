import React from 'react'
import Container from '../utils/Utils'
import { FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Info = () => {
    const {t}=useTranslation()
  return (
    <div id='info' className='-mt-20'>
        <Container>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
                <div className='md:w-[33%] px-4 w-full bg-white shadow-card rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px]'>
                    <div className='bg-[#f0f0f0] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl'>
					<FaPhoneAlt style={{ color: '#A8CA3D' }} />	
                    </div>
                    <h2 className='font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]'>{t('info.phone')}</h2>
                    <a className='text-main text-center' href="tel:+998771113777"><p style={{ color: '#A8CA3D' }}>+998 77 111 37 77</p></a>
                </div>
                <div className='md:w-[33%] px-4 w-full bg-white shadow-card rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px]'>
                    <div className='bg-[#f0f0f0] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl'>
                        <MdEmail style={{ color: '#A8CA3D' }} />
                    </div>
                    <h2 className='font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]'>{t('info.email')}</h2>
                    <a className='text-main text-center' href=""><p style={{ color: '#A8CA3D' }}>tourland@mail.ru</p></a>
                </div>
                <div className='md:w-[33%] px-4 w-full bg-white shadow-card rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px]'>
                    <div className='bg-[#f0f0f0] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl'>
                        <FaLocationDot style={{ color: '#A8CA3D' }}/>
                    </div>
                    <h2 className='font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]'>{t('info.location')}</h2>
                    <a style={{ color: '#A8CA3D' }} className='text-main text-center' href="https://maps.app.goo.gl/MiXQ7qgTjZpfwW2c9" target="_blank" rel="noopener noreferrer">{t('info.place')} </a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Info