import React from 'react'
import Container from '../utils/Utils'

const Map = () => {
  return (
    <div className='mt-28 rounded-3xl overflow-hidden'>
        <Container>
        <iframe className='w-full rounded-t-3xl shadow-card' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d11990.80194929237!2d69.24442710975076!3d41.293622592278844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzUwLjMiTiA2OcKwMTQnMzguOSJF!5e0!3m2!1sru!2s!4v1726660627573!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Container>
    </div>
  )
}

export default Map