import React from 'react'
import { categoryieslinks } from '../constants'
import Icon from 'react-native-ico-shopping';
import { CiShoppingCart } from "react-icons/ci";

import Image from 'next/image';
import { IoIosHeartEmpty } from "react-icons/io";


import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";



const NavBar = () => {
  return (

    <main>
      {/* UPPER NAVBAR PART */}
      <div id='Deal part' className='p-4 flex gap-5 pr-6 justify-between items-center bg-black max-lg:hidden'>


        <div className=''>
          Free shipping, 30-day return or refund guarantee.
        </div>
        <div className='flex gap-4'>
          <a href="#">SIGN IN</a>
          <a href="#">FAQS</a>
          <a href="#">HELP</a>
          <a href="#">USD</a>
        </div>
      </div>

      {/* INNER NAVBAR */}
      <nav className='p-6 items-center gap-16  max-md:hidden bg-white  text-black '>
        <ul className='flex justify-center  items-center gap-10'>
          <button className='flex py-2 px-3 bg-slate-500 rounded-full text-white '>
            <button className='items-center'>All Categories
            </button>
          </button>
          {categoryieslinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className='font-montserrat leading-normal text-lg text-slate-gray '
              >
                {items.label}
              </a>

            </li>
          ))}
          <div id='icons' className='flex gap-7 text-xl items-center'>
            <a href=""> <IoSearchOutline /></a>
            <a href=""><IoIosHeartEmpty /></a>
            <a href=""><IoBagOutline /></a>
            $0.00
          </div>

        </ul>



      </nav>


    </main>

  )
}

export default NavBar
