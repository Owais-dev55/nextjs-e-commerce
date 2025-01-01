import React from 'react'
import Hero from './Hero/Hero'
import Pricing from '@/Component/FrequentComponent/Pricing'
import Footer from '@/Component/Footer/Footer'
import FAQSection from './FAQSection/FAQSection'

const page = () => {
  return (
    <div>
        <Hero />
        <FAQSection />
        <Pricing />
        <Footer  backgroundColor='#FFFFFF'/>
    </div>
  )
}

export default page