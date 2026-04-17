import React from 'react'
import Container from '../utils/Utils'
import DestinationCard from './DestinationCard'
import dubai from "../assets/choy.jpg"
import antalya from "../assets/fakt2.jpg"
import istanbul from "../assets/panda.jpg"
import sharm from "../assets/xitoyta.jpeg"
import { useTranslation } from 'react-i18next'

const Visit = () => {
  const {t}=useTranslation()
  return (
    <div className='mt-28'>
       <Container>
            <div>
                <h2 className='font-bold text-2xl md:text-3xl text-[#2a2a2a]'>{t('visit.h2')}</h2>
                <p  className='text-[15px] text-[#01294c] max-w-[560px] leading-7 my-5'>{t('visit.p')}</p>
                <DestinationCard img={dubai} title={t('visitCard.fakt1')}  subtitle={t('visitCard.1.subtitle')} parag={t('visitCard.1.parag')} population={'8.66'} territory={'41.290'} price={'400'}/>
                <div className='w-full h-[1px] text-[#01294c] bg-[#01294c] mb-10'></div>
                <DestinationCard img={antalya} title={t('visitCard.fakt2')} subtitle={t('visitCard.2.subtitle')} parag={t('visitCard.2.parag')} population={'44.48'} territory={'275.400'} price={'946'}/>
                <div className='w-full h-[1px] bg-[#01294c] mb-10'></div>
                <DestinationCard img={sharm} title={t('visitCard.fakt3')} subtitle={t('visitCard.3.subtitle')} parag={t('visitCard.3.parag')} population={'67.41'} territory={'551.500'} price={'425'}/>
                <div className='w-full h-[1px] bg-[#01294c] mb-10'></div>
                <DestinationCard img={istanbul} title={t('visitCard.fakt4')} subtitle={t('visitCard.4.subtitle')} parag={t('visitCard.4.parag')} population={'44.48'} territory={'275.400'} price={'546'}/>
            </div>
        </Container>
    </div>
  )
}

export default Visit