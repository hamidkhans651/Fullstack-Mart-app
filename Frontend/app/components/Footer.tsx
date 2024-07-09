import React from 'react'
import { cookie, footerLinks } from '../constants'
import { link } from 'fs'
import { cookies } from 'next/headers'
import { title } from 'process'


const Footer = () => {
  return (
    <section className='grid grid-cols-1  pr-10 pl-10  py-20'>
      <div className='flex flex-1 justify-start lg:gap-10  '>
        {footerLinks.map((Section) => (
          <div key={Section.title}>
            <h4 className='text-white text-lg py-1'>{Section.title}
            </h4>
            <ul>
              {Section.links.map((link) => (
                <li>
                  <a href=""> {link.name}</a>
                </li>
              )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className='flex flex-1 justify-start lg:gap-10  '>
        {cookie.map((Section) => (
          <div key={Section.title}>
            <h4 className='text-white'>{Section.title}
            </h4>
            <ul className='flex gap-4 py-20'>
              {Section.links.map((link) => (
                <li>
                  <a href=""> {link.name}</a>
                </li>
              )
              )}
            </ul>
          </div>
        ))}
      </div>
    </section >
  )
}

export default Footer
