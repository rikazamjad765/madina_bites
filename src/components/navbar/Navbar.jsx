'use client'

import React, { useState } from 'react'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="w-full mx-auto flex flex-col">
      <nav
        className="w-full h-24 flex items-center justify-between"
        style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}
      >
        <div className="w-full mx-auto px-3 md:px-6 py-4 flex items-center justify-between">
          <Image src="/logo.svg" alt="Logo" width={100} height={50} className='max-sm:w-20 max-sm:h-20' />

          {/* Center Links for large screens */}
          <ul
            className="hidden md:flex gap-8"
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-20)' }}
          >
            <li className="cursor-pointer hover:text-primary">Home</li>
            <li className="cursor-pointer hover:text-primary">Menu</li>
            <li className="cursor-pointer hover:text-primary">About us</li>
          </ul>

          {/* Right side Icons */}
          <div className="flex gap-6 items-center">
            <Search className="w-5 h-5 cursor-pointer" />
            <User className="w-5 h-5 cursor-pointer" />
            <ShoppingBag className="w-5 h-5 cursor-pointer" />
            <Menu
              className="w-6 h-6 cursor-pointer md:hidden"
              onClick={() => setSidebarOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black z-50 text-white transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <span className="text-lg font-semibold">Madina Bites</span>
          <X className="w-6 h-6 cursor-pointer" onClick={() => setSidebarOpen(false)} />
        </div>
        <ul className="flex flex-col p-4 gap-4" style={{ fontFamily: 'var(--font-inter)', fontWeight: 'var(--weight-medium)' }}>
          <li className="cursor-pointer hover:text-primary" onClick={() => setSidebarOpen(false)}>Home</li>
          <li className="cursor-pointer hover:text-primary" onClick={() => setSidebarOpen(false)}>Menu</li>
          <li className="cursor-pointer hover:text-primary" onClick={() => setSidebarOpen(false)}>About us</li>
        </ul>
      </div>
    </div>
  )
}
