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
          )})}
      </div>
<section className='p-20'>
<h1 className='flex justify-center items-center font-helvetica-WIN-ON-AIR text-6xl font-bold'>
        WIN ON AIR</h1>
      <div className='flex justify-center items-center font-helvetica-now-text-hero text-lg '>
        <p> Meet the next generation of Nike Air. 
       </p>
      </div>
      <p className='flex justify-center items-center text-lg font-helvetica-now-text-hero'> 
        Engineered to the exact specifications of 
     </p>
     <p className='flex justify-center items-center text-lg font-helvetica-now-text-hero'>
       championship athletes.</p>
      <div className='flex justify-center gap-7 pb-20'>
        <button>but
        </button>
        <button>but2
        </button>
      </div>

</section>
     
      
    </div>
    
  )}

export default LandingPage
