import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import React from 'react'
import Trends from '../components/Trends'
import Status from '@/components/Status'
import Product from '@/components/product/Product'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { MenuProvider } from '@/context/MenuContext'

const App = () => {
  return (
    <> 
    {/* <Provider  store={store}> */}
      <MenuProvider>
        <main className='h-screen w-screen flex items-center flex-col overflow-x-auto'>
         <Navbar/>
         <Banner/>
         <Trends/>
         <Status/>
         <Product/>
        </main>
      </MenuProvider>
     {/* </Provider> */}
    </>
  )
}

export default App
