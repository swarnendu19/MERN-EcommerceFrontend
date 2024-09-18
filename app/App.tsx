import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import React from 'react'
import Trends from '../components/Trends'
import Status from '@/components/Status'

const App = () => {
  return (
    <>
     <Navbar/>
     <Banner/>
     <Trends/>
     <Status/>
    </>
  )
}

export default App
