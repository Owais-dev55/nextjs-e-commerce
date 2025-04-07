import Navbar2 from '@/Component/Navbar2/Navbar2'
import React from 'react'
import Hero from './Hero/Hero'
import Footer from '@/Component/Footer/Footer'
import { Metadata } from 'next'
import FAQSection from '../Pricing/FAQSection/FAQSection'

export const metadata: Metadata = {
  title: "Connect-Pakbeats , For more to Know",
  description: "Generated by Owais Khiljee",
};


const page = () => {
  return (
    <div>
        <Navbar2 />
        <Hero />
        <FAQSection />
        <Footer backgroundColor='#FFFFFF' />
    </div>    
  )
}

export default page