import React from 'react'
import Image from 'next/image'

const HeroImages = () => {
    return (
        <section className=' space-y-4'>
            <div id='image1' className=''>
                {['nike-just-do-it'].map((path) => {
                    return (
                        <div key={path}>
                            <Image src={`/${path}.jpeg`}
                                alt="Logo" width={600} height={200} />
                        </div>
                    )
                })}
            </div>
            <div id='image2' className=''>
                {['bigimage'].map((path) => {
                    return (
                        <div key={path}>
                            <Image src={`/${path}.jpg`}
                                alt="Logo" width={600} height={200} />
                        </div>
                    )
                })}
            </div>

            <h1 className='flex justify-center items-center font-helvetica-now-text-hero text-3xl text-center racking-tighter pt-10'>
                Built to Compete Against the Best On <br />Every Track, Court and Pitch</h1>
            <div className='flex justify-center gap-2 pb-20'>

                <button className='rounded-full bg-[#CACACB] text-black py-1 px-3'>Experience Air
                </button>
                <button className='rounded-full bg-[#CACACB] text-black py-1 px-3'>Shop Air
                </button>
            </div>



        </section>
    )
}

export default HeroImages
