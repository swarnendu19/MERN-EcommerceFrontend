"use client"
import React, { useState } from 'react';
import Loading from './Loading';

interface Banner {
  bannerid: number;
  toptitle: string;
  middletitle: string;
  bottomtitle: string;
  imglink: string;
  startprice: number;
  buttontitle: string;
  redirect_link: string;
  createdat: Date;
  updatedat: Date;
}

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  // Mock data for banners
  const dummyData: Banner[] = [
    {
      bannerid: 1,
      toptitle: 'Summer Sale',
      middletitle: 'Get up to 50% off',
      bottomtitle: 'Starting at',
      imglink: 'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-1.jpg',
      startprice: 199,
      buttontitle: 'Shop Now',
      redirect_link: '#',
      createdat: new Date(),
      updatedat: new Date(),
    },
    {
      bannerid: 2,
      toptitle: 'New Arrivals',
      middletitle: 'Autumn Collection 2024',
      bottomtitle: 'From',
      imglink: 'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-2.jpg',
      startprice: 299,
      buttontitle: 'Explore',
      redirect_link: '#',
      createdat: new Date(),
      updatedat: new Date(),
    },
    {
      bannerid: 3,
      toptitle: 'Exclusive Offers',
      middletitle: 'Winter Wonderland',
      bottomtitle: 'Price starts at',
      imglink: 'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-3.jpg',
      startprice: 399,
      buttontitle: 'Buy Now',
      redirect_link: '#',
      createdat: new Date(),
      updatedat: new Date(),
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dummyData.length) % dummyData.length);
  };

  return (
    <div className='relative flex flex-col items-center mt-4'>
      <div className='relative max-w-[1300px] overflow-hidden'>
        <div
          className='flex transition-transform duration-500 relative'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {loading && (
            <div className='w-screen h-[300px]'>
              {loading && (
                <div className='absolute left-0 right-0 z-50'>
                  <Loading />
                </div>
              )}
            </div>
          )}
          {dummyData.map((each, index) => (
            <div key={index} className='flex-shrink-0 w-full'>
              <div className='relative'>
                <img
                  className='max-h-[450px] z-10 rounded-xl object-cover w-full'
                  src={each.imglink}
                  alt={`Slide ${index + 1}`}
                />
                {/* Left and Right buttons positioned inside the image container */}
                <button
                  className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded focus:outline-none'
                  onClick={prevSlide}
                >
                  &#10094;
                </button>
                <button
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded focus:outline-none'
                  onClick={nextSlide}
                >
                  &#10095;
                </button>
                <div className='absolute z-[15] md:hidden left-14 bottom-0 top-0 mt-auto mb-auto bg-white w-[320px] h-[220px] sm:w-[520px] sm:h-[220px] opacity-50 rounded-xl'></div>
                <div className='absolute z-20 w-[300px] h-[200px] md:h-auto sm:w-[500px] flex flex-col gap-0 md:gap-4 md:left-32 left-16 bottom-0 top-0 mt-auto mb-auto justify-center'>
                  <p className='text-salmon lg:text-3xl text-2xl font-medium'>{each.toptitle}</p>
                  <p className='sm:text-5xl text-2xl font-bold'>{each.middletitle}</p>
                  <p className='sm:text-2xl text-xl font-medium text-silver'>
                    {each.bottomtitle}{' '}
                    <span className='lg:text-4xl font-bold'>{each.startprice}</span>
                  </p>
                  <button className='sm:p-2 p-1 bg-salmon text-white px-5 sm:w-[130px] w-[120px] text-sm sm:text-base rounded-md font-semibold'>
                    {each.buttontitle}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
