import { HeartIcon,ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import React from 'react'
import Account from './DropDownMenu/Account'

const Navbar = () => {
  return (
    <nav className='w-full h-auto flex flex-col items-center'>
      <div className='w-[100%] h-auto flex flex-col justify-between items-center border-b-[1px]'>
        <div className='flex justify-evenly items-center w-[100%] flex-col sm:flex-row gap-2 sm:gap-0 '>
          <div className='w-[80%] flex justify-between items-center flex-col sm:flex-row sm:gap-0  '>
            <div>
             <Link href={'/'} className='mr-2.5 text-[26px] font-bold'>
             <span className='text-[36px]'>My</span>-Comm
             </Link>
            </div>
            <form className="border-[1.9px] rounded-[10px] h-[42px] w-[90%] sm:w-[600px] mb-5 sm:mb-0 flex justify-between item-center ">
                <input name='searchEntry'
                placeholder='Search Product...' 
                type='text'
                className='outline-0 ml-5 text-[20px] w-[90%] placeholder:text-base placeholder:text-silver'/>
                <button type='submit' className='text-[16px] mr-2'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <div className='gap-5 text-davysilver my-8 hidden sm:flex sm:items-center'>
             <Account/>
             <button><HeartIcon width={40}/>
             {/* <span className="absolute top-[-2px] right-[-3px] bg-bittersweet text-white text-xs font-medium leading-none px-1.5 py-0.5 rounded-full">0</span> */}
             </button>
             <button><ShoppingBagIcon width={40}/>
             {/* <span className="absolute top-[-2px] right-[-3px] bg-bittersweet text-white text-xs font-medium leading-none px-1.5 py-0.5 rounded-full">0</span> */}
             </button>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[50px] w-[100%] mt-2 justify-center items-center hidden lg:flex'>
        <div className='flex'>
          <div className='relative items-center'>
            <button className='m-6 text-gray-700 font-semibold '>Men</button>
            <button>Woman</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
