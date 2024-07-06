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
      <div className='flex justify-center  text-[4vh] pt-20'>
        <h1>
          Meet the next generation of Nike Air. <br />
          Engineered to the exact specifications of championship athletes.
        </h1>
      </div>
      <div className='flex justify-center gap-7 pb-20'>
        <button>but
        </button>
        <button>but2
        </button>
      </div>
      
    </div>
    
  )}

export default LandingPage
