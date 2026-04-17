import React from 'react'
import Container from '../utils/Utils'
import DestinationCard from './DestinationCard'
import train from "../assets/traynn.jpg"
import plane from "../assets/plane.jpg"
import { useTranslation } from 'react-i18next'

const Destination = () => {
  const {t} =useTranslation()
  return (
    <div id='destination' className='mt-28'>
        <Container>
            <div>
                <h2 className='font-bold text-center text-2xl sm:text-2xl md:text-3xl text-[#2a2a2a]'>{t('destination.h2')}</h2>
                <p style={{ color: '#01294c' }} className='sm:text-[15px] text-sm mx-auto text-center text-[#AFAFAF] max-w-[455px] leading-7 my-5' >{t('destination.p')}</p>
                <DestinationCard img={train} title={t('destinationCard.1.title')} subtitle={t('destinationCard.1.subtitle')} parag={t('destinationCard.1.parag')}/>
                <div className='w-full h-[1px] bg-[#eeeeee] mb-10'></div>
                <DestinationCard img={plane} title={t('destinationCard.2.title')} subtitle={t('destinationCard.2.subtitle')} parag={t('destinationCard.2.parag')}/>
            </div>
        </Container>
    </div>
  )
}

export default Destination