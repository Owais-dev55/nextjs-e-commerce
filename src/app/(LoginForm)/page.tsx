"use client"

import React from 'react'
import SignIn from './signIn/SignIn'
import Navbar from '@/Component/Navbar/Navbar'

export const dynamic = 'force-dynamic'
const page = () => {
  return (
    <>
    <Navbar />
    <SignIn/>
    </>
  )
}

export default page