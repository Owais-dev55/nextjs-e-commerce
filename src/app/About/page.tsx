import Navbar2 from '@/Component/Navbar2/Navbar2'
import React from 'react'
import Hero from './Hero/Hero'
import VideoPage from './VideoPage/VideoPage'
import Footer from '@/Component/Footer/Footer'
import { Metadata } from 'next'
import BrandLogos from '@/Component/FrequentComponent/Brandlogos'

export const metadata: Metadata = {
  title: "About-Pakbeats",
  description: "Generated by Owais Khiljee",
};


const page = () => {
  return (
    <div>
        <Navbar2 />
        <Hero />
        <VideoPage />
        <BrandLogos />
        {/* <LowerSection />   */}
        <Footer backgroundColor='#FFFFFF' />
    </div>
  )
}

export default page

