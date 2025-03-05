import React from 'react'
import Navbar from '@/Component/Navbar/Navbar'
import Hero from './Hero/Hero'
import MadeComponent from './MadeComponent/MadeComponent'
import Footer from '@/Component/Footer/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>        
        <MadeComponent/>
        <Footer backgroundColor="#FFFFFF" />
    </div>
  )
}

export default page