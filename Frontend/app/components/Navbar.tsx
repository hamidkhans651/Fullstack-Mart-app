import React from 'react'
import { navlinks } from '../constants'
import Image from 'next/image'
import { categoryieslinks } from '../constants'

const Navbar = () => {
  return (
    <main>

      <div className='flex justify-end  bg-[#111111]'>
        <nav className='max-lg:hidden'>
        <ul className='flex gap-3 pr-10 pt-1 pb-1 text-lg  items-center'>
          {navlinks.map((item) =>
            <li key={item.label}>
              <a href="{item.label}" className='font-montserrat text-sm font-semibold text-slate-gra'>
                {item.label}
              </a>
            </li> 
          )}
        </ul>
        </nav>
      </div>
      <div className='flex justify-center pr-10 pt-1 text-lg  pb-11 bg-[#1F1F21]'>
        <ul className='flex gap-3 '>
          {categoryieslinks.map((links) =>
            <li key={links.label}>
              <a href="{item.label}" className='font-montserrat text-sm font-semibold text-slate-gra'>
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
