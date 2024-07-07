import React from 'react'
import { navlinks } from '../constants'
import Image from 'next/image'
import { categoryieslinks } from '../constants'

const Navbar = () => {
  return (
    <main >
      <div className='flex justify-end bg-[#111111]'>
        <nav className='max-md:hidden p-2  '>
        <ul className='flex gap-3 justify-end items-center pr-10'>
          {navlinks.map((item) =>
            <li key={item.label}>
              <a href="{item.label}" className='font-Helvetica-Now-Text text-white text-xs leading-6'>
                {item.label}
              </a>
            </li> 
          )}
        </ul>
        </nav>
      </div>
      <div className='flex relative justify-center items-center p-4 bg-[#1F1F21]'>
        <ul id='catogrieslinks' className='flex gap-3   '>
          {categoryieslinks.map((links) =>
            <li key={links.label}>
              <a href="{item.label}" className='font-helvetica-now-text-medium font-extrabold text-white text-base leading-7'>
                {links.label}
              </a>
            </li>
          )}


        </ul>

      </div>
    </main>

  )
}

export default Navbar
