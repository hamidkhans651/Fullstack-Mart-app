import React from 'react';
import Image from 'next/image';

const ShopByCategory = () => {
  return (

    <section className='  padding-x-2'>
      <h1 className='text-3xl pr-10 pl-10 py-3'>Shop By Category</h1>
      <div className='grid grid-cols-3 gap-4 pr-10 pl-10 py-3'>

        {['carasol1', 'carasol2', 'carasol3'].map((path) => (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="carousel" width={600} height={200} />
          </div>
        ))}
      </div>


      <h1 className='text-3xl pr-10 pl-10 py-3'>Shop By Air</h1>
      <div className='grid grid-cols-4 gap-4 pr-10 pl-10 '>
        {['NikeAlphafly3', 'NikeMaxfly2', 'NikeMercurialVapor', 'NikePegasusEasyOn'].map((path) => (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="carousel" width={600} height={200} />
          </div>
        ))}
      </div>
    </section>

  );
};

export default ShopByCategory;
