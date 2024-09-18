"use client"
import Link from 'next/link';
import { Product } from '@/types/ProductTypes';
import { useState } from 'react';
import QuickView from './ProductUI/QuickView';
import Stars from './ProductUI/Stars';



const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [productData, setproductData] = useState<Product>(product);
  const [open, setOpen] = useState(false);

  function categoryLink(maincategory: string, category: string) {
    const splitCat = category.split(' ').join('-');
    return `/sub-category/${maincategory}/${splitCat}`
  }

  return (
    <div
      className='relative flex flex-col border-[1px] rounded-xl lg:max-h-[400px] sm:max-w-[220px] p-1 overflow-hidden transition-shadow duration-300 hover:shadow-lg'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <QuickView open={open} setOpen={setOpen} product={productData} /> */}
      {product.issale && (
        <div className="absolute top-2 -left-8 bg-black text-white px-10 py-1 z-10 rotate-[320deg] text-[12px] uppercase rounded">
          SALE
        </div>
      )}
      {product.isnew && (
        <div className="absolute top-2 -left-8 bg-salmon text-white px-10 py-1 z-10 rotate-[320deg] text-[12px] uppercase rounded">
          New
        </div>
      )}
      {product.isdiscount && (
        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 text-md uppercase rounded">
          {product.discount}%
        </div>
      )}
      <div className={`relative transition-transform mb-1 duration-300 ${isHovered && 'scale-105'}`}>
        <img className='min-w-[200px] min-h-[210px]' src={product.images.imglink} alt={product.title} />
        {isHovered && (
          <button
            className='absolute bottom-2 left-1/2 rounded-xl transform -translate-x-1/2 w-[100px] h-[30px] flex items-center justify-center bg-black bg-opacity-50 text-white text-sm uppercase transition-opacity duration-300'
            onClick={() => { setOpen(true); setproductData(product) }}>
            Quickview
          </button>
        )}
      </div>
      <div className='pl-4 pr-4 flex flex-col gap-2'>
        <Link href={categoryLink(product.maincategory, product.category)}><p className='text-[14px] text-salmon'>{product.category}</p></Link>
        <Link href={`/product/${product.productid}`}><p className='tracking-[1px] text-silver hover:text-davysilver'>{product.title}</p></Link>
        <div className='flex items-center gap-2'>
          <Stars stars={product.stars} />
          {product.reviewCount > 0 && <p className=' text-silver'>{product.reviewCount}</p>}
        </div>
        <div className='flex mb-5 items-center gap-4'>
          <p className='font-bold text-[18px]'>${product.discount}</p>
          <p className='line-through'>${product.price}</p>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;