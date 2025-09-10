'use client'
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='mt-14 bg-[#FF7305A1] lg:p-6 p-4 font-pt'>
            <div className='py-2 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 space-x-10 pb-5'>
                <div className=''>
                    <img src={'/logo.svg'} className='w-40'/>
                    <p className="lg:text-xl sm:text-base text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>


                <div></div>

                <div className='mt-5 lg:ps-5'>
                    <h2 className='font-bold xl:text-3xl lg:text-2xl text-xl font-bona pb-3 text-[#ce9e35]'>Usefull Links</h2>
                    <div className='flex gap-20 xl:text-lg lg:text-base text-sm'>
                        <ul className="md:flex space-x-10 space-y-5">
                            <li className='cursor-pointer hover:underline hover:text-[#ce9e35] transition-all ease-in-out duration-100 pt-1'>Home</li>
                            <li className='cursor-pointer hover:underline hover:text-[#ce9e35] transition-all ease-in-out duration-100 pt-1'>Menu</li>
                            <li className='cursor-pointer hover:underline hover:text-[#ce9e35] transition-all ease-in-out duration-100 pt-1'>About</li>
                        </ul>
                    </div>
                </div>

                <div className='mt-5 lg:ps-10'>
                    <h2 className='font-bold xl:text-3xl lg:text-2xl text-xl font-bona pb-3 text-[#ce9e35]'>Get In Touch</h2>
                    <ul className=" xl:text-lg lg:text-base text-sm">
                        <li className=' cursor-pointer'><a href='tell:+12124567890'>+1-212-456-7890</a></li>
                        <li className=' hover:text-[#ce9e35] cursor-pointer'><a href='mailto:help@hungerhub.com'>madinabites@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex flex-wrap items-center md:justify-between justify-start border-t max-md:pt-2'>
                <p className='text-white lg:text-base text-sm'>@Copyright 2025 madinabites. All rights reserved.</p>
                <div className='flex items-center gap-3 my-5'>
                    <p className='text-white lg:text-lg sm:text-base text-sm'>Follow us on</p>
                    <FaFacebook className="w-5"/>
                    <GrInstagram className="w-5"/>
                    <IoLogoTiktok className="w-5"/>
                </div>
            </div>
        </div>
    )
}

export default Footer
