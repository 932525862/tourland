import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Weekly from '../components/Weekly'
import Visa from '../components/Visa'
import Destination from '../components/Destination'
import Visit from '../components/Visit'
import Reservation from '../components/Reservation'
import Info from '../components/Info'
import Map from '../components/Map'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Best from '../components/Best'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Banner />
        <Weekly/>
        <Visa/>
        <Destination/>
        <Visit/>
        <Best/>
        <Reservation/>
        <Info/>
        <Map/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Home