import Navbar2 from '@/Component/Navbar2/Navbar2'
import React from 'react'
import Hero from './Hero/Hero'
import VideoPage from './VideoPage/VideoPage'
import Footer from '@/Component/Footer/Footer'
import LowerSection from './LowerSection/LowerSection'

const page = () => {
  return (
    <div>
        <Navbar2 />
        <Hero />
        <VideoPage />
        <LowerSection />
        <Footer backgroundColor='#FFFFFF' />
    </div>
  )
}

export default page