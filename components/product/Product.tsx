"use client"
import React, { useState } from 'react';
import { dummyProducts } from '@/constant/dummyProduct';
import ProductCard from './ProductCard';
 


const Products = () => {
  const [loading] = useState(false);

  return (
    <div className='sm:ml-4 ml-auto mr-auto pb-8 max-w-[980px] flex flex-col flex-1'>
      <p className='border-b-[1px] leading-[40px] tracking-wide font-semibold text-lg'>Products</p>
      <div className='flex flex-wrap mt-8 gap-5 justify-center xl:w-[980px] lg:w-[720px] max-w-[980px] flex-1 relative'>
        {/* {loading && <div className='w-full h-[300px]'><Loading /></div>}
        {dummyProducts.length === 0 && <NoProduct />} */}
        {dummyProducts.map((each, index) => (
          <ProductCard key={index} product={each} />
        ))}
      </div>
    </div>
  );
}

export default Products;
