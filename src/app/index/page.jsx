import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Banner from './_components/banner/Banner'
import AboutUs from './_components/aboutus/AboutUs'
import FoodSlider from './_components/foodSlider/FoodSlider'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <FoodSlider />
    </div>
  )
}

export default HomePage
