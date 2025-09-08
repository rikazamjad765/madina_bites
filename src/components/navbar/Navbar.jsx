'use client'
import React from 'react'
import { Search, User, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='max-w-[1440px] w-full mx-auto flex flex-col'>
        <nav className="w-full h-24 flex items-center justify-between" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
            <div className="w-full mx-auto px-6 py-4 flex items-center justify-between bg-amber-500">
            
                {/* Empty left side (or add logo if needed later) */}
                <div />

                {/* Center Links */}
                <ul className="flex gap-8" style={{ fontFamily: 'var(--font-inter)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-20)' }}>
                    <li className="cursor-pointer hover:text-primary">Home</li>
                    <li className="cursor-pointer hover:text-primary">Menu</li>
                    <li className="cursor-pointer hover:text-primary">About us</li>
                </ul>

                {/* Right side Icons */}
                <div className="flex gap-6 items-center">
                    <Search className="w-5 h-5 cursor-pointer" />
                    <User className="w-5 h-5 cursor-pointer" />
                    <ShoppingBag className="w-5 h-5 cursor-pointer" />
                </div>
            </div>
        </nav>
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
    </div>
  )
}
