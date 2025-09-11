import { ArrowBigRightDash, UtensilsCrossed } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex flex-col gap-8 md:py-20 py-10 text-center w-full items-center px-4 md:px-8' id='aboutus'>
      <div className='flex flex-col gap-4 text-center w-full items-center'>
        <h1 className='font-love text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-gold'>Why Dine With Us?</h1>
        <p className='max-w-[1000px] font-pt text-sm md:text-lg lg:text-xl'>
          From classic favorites to modern culinary delights, our menu is designed to tantalize your taste buds. Every dish is made with the freshest ingredients and expertly prepared by our talented chefs with an <span>Extra Love</span>
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1100px]'>
        <div className='col-span-1 p-2 md:py-8 md:px-4 rounded-2xl flex justify-center md:relative space-x-4'>
          <Image
            src="/biryani.svg"
            alt="food image"
            width={10}
            height={50}
            priority
            className='border border-white rounded-xl md:w-[170px] w-[50%] object-cover h-auto md:absolute md:-rotate-12 top-40 lg:left-10'
          />
          <Image 
            src="/qorma.svg" 
            alt="food image" 
            width={10} 
            height={50} 
            priority 
            className='md:w-[170px] w-[50%] object-cover rounded-xl max-w-full h-auto md:absolute  md:-rotate-12 top-2 lg:right-10 shadow-2xl border border-white'  
          />
        </div>
        <div className='col-span-1 md:col-span-2 bg-white/50 rounded-2xl'>
          <div className='p-6 md:p-10 max-w-full text-start space-y-4'>
            <UtensilsCrossed className='w-10 h-10 md:w-14 md:h-14' />
            <p className='font-inria text-2xl md:text-4xl'>Fresh, Locally Sourced Ingredients.</p>
            <p className='font-pt text-sm md:text-base'>We use only the freshest ingredients & traditional recipes to ensure each dish is a masterpiece. Our menu is a reflection of our commitment to quality and taste. Enjoy the vibrant south asian flavors that will leave you craving for more.</p>
            <button className='flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-red-500 text-white 
                    font-pt font-medium shadow-lg p-3 rounded-full cursor-pointer hover:scale-105 transition duration-300 font-pt text-sm md:text-base'>
              View our menu <ArrowBigRightDash />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
