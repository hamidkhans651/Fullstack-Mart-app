import React from 'react'
import Image from 'next/image'


const LandingPage = () => {
  return (
    <div className="bg-[#1F1F21]">
      <div className=''>
        {['bigimage'].map((path) => {
          return (
            <div key={path}>
              <Image src={`/${path}.jpg`}
                alt="Logo" width={600} height={200} />
            </div>
          )
        })}
      </div>
      <section className='p-20 tracking-t lead'>
        <h1 className='flex justify-center items-center font-helvetica-WIN-ON-AIR text-6xl tracking-tighter max-h-full lea	'>
          WIN ON AIR</h1>
        <div className='flex justify-center items-center font-helvetica-now-text-hero text-xl text-center  '>
          <p className=''> Meet the next generation of Nike Air. <br />
            Engineered to the exact specifications of <br /> championship athletes.</p>
        </div>
        <div className='flex justify-center gap-2 pb-20'>

          <button className='rounded-full bg-[#CACACB] text-black py-1 px-3'>Experience Air
          </button>
          <button className='rounded-full bg-[#CACACB] text-black py-1 px-3'>Shop Air
          </button>
        </div>

      </section>


    </div>

  )
}

export default LandingPage
