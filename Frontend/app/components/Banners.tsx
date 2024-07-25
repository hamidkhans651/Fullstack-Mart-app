import React from 'react';
import Image from 'next/image';

const Banners = () => {
  return (
    <main className='text-black pb-40'>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 pt-20'>
        {/* Banner 1 */}
        <div className='md:col-start-3 md:col-span-1 p-7'>
          <Image alt="Clothing Collections" src="/banner/banner-1.jpg" width={1000} height={300} />
          Clothing Collection
        </div>

        {/* Banner 2 */}
        <div className='md:col-start-1 md:col-span-1 p-7'>
          <Image alt="Shoes Spring 2030" src="/banner/banner-2.jpg" width={700} height={700} />

          <h1 className='text-2xl'> Shoes Spring 2030</h1>
        </div>

        {/* Banner 3 */}
        <div className='md:col-start-3 md:col-span-1 p-7 pt-40'>
          <Image alt="Accessories" src="/banner/banner-3.jpg" width={6000} height={700} />
          Accessories
        </div>
      </div>
    </main>
  );
};

export default Banners;
