import Navbar2 from '@/Component/Navbar2/Navbar2'
import React from 'react'
import Hero from './Hero/Hero'
import Card from './Card/Card'
import Footer from '@/Component/Footer/Footer'
import Pricing from '@/Component/FrequentComponent/Pricing'

const page = () => {
  return (
    <div>
        <Navbar2 />
        <Hero />
        <Card />
        <Pricing />
        <Footer backgroundColor='#FFFFFF' />
    </div>
  )
}

export default page