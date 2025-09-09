import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full'>
        <Image
            src="/madinaBites-banner.svg"
            alt="Banner Background"
            width={100}
            height={50}
            // fill
            priority
            className="w-full h-full"
        />
    </div>
  )
}

export default Banner
