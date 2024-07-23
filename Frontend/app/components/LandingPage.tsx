import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div>
      <main className='relative'>
        <div className='flex justify-end py-[-10] pb-8'>
          <div className='relative  '>

            <Image
              src="/hero/hero-1.jpg"
              alt="Hero Image"
              width={9000}
              height={9000}

            // Adjust height as per your image aspect ratio



            />
            <div className='absolute inset-7 flex flex-col justify-center items-start text-center text-black  '>
              <h6 className='text-sm md:text-lg lg:text-xl xl:text-2xl'>
                Summer Collection
              </h6>
              <h2 className='text-start text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-2'>
                Fall - Winter <br />Collections 2030
              </h2>
              <p className='text-start text-xs md:text-sm lg:text-base xl:text-lg '>
                A specialist label creating luxury essentials. Ethically crafted with an <br />unwavering
                commitment to exceptional quality.
              </p>


              <div className='mt-4'>
                <button className='flex  items-center px-10 py-4 bg-black text-white gap-4 '>SHOP NOW <FaArrowRight /> </button>

              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
