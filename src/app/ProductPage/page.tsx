import React from 'react'
import Hero from './Hero/Hero'
import DescriptionPage from './DescriptionPage/DescriptionPage'
import BestSeller from '@/Component/Bestseller/Bestseller'
import BestsellerProduct from './BestsellerProduct/BestsellerProduct'
import Brandlogos from '@/Component/FrequentComponent/Brandlogos'
import Footer from '@/Component/Footer/Footer'

const page = () => {
  
  return (
    <div>
        <Hero/>
        <DescriptionPage/>
        <BestsellerProduct />
        <Brandlogos />
        <Footer backgroundColor='#FFFFFF' />
    </div>
  )
}

export default page