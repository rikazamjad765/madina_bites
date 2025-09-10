import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Banner from './_components/banner/Banner'
import AboutUs from './_components/aboutus/AboutUs'
import FoodSlider from './_components/foodSlider/FoodSlider'
import SignatureItems from './_components/signatureItems/SignatureItems'
import OurMenu from './_components/ourMenu/OurMenu'
import Footer from '@/components/footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <FoodSlider />
      <SignatureItems />
      <OurMenu />
      <Footer />
    </div>
  )
}

export default HomePage
