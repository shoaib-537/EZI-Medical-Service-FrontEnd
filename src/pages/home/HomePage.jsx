import React from 'react'
import TopBanner from '../../components/TopBanner'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import ServicesCards from '../../components/ServicesCards'
import DetailSection from './components/DetailSection'

const HomePage = () => {
  return (
    <div>
      <TopBanner/>
      <Navbar/>
      <HeroSection/>
      <ServicesCards/>
      <DetailSection/>
    </div>
  )
}

export default HomePage