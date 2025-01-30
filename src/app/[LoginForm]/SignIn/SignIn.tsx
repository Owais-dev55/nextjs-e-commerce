'use client'

import { signIn } from "next-auth/react"
import React, { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'

const SignIn = () => {
  const [isClient, setIsClient] = useState(false)  
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSignIn = (provider: string) => {
    signIn(provider, { 
      callbackUrl: '/', 
    })
  }

  if (!isClient) return null

  return (
    <div className="grid place-items-center h-[500px] bg-[#FFFFFF]">
      <div className="bg-[#FAFAFA] rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-10 w-[400px] text-center">
        <h2 className="text-[28px] font-semibold text-[#252B42] mb-8 uppercase tracking-[2px]">Login With</h2>

        <div className="mb-6">
          <button
            onClick={() => handleSignIn("google")} 
            className="w-full bg-white text-[#757575] border border-[#dadce0] rounded-[4px] py-3 px-5 text-base font-medium cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md flex items-center justify-center"
          >
            <i className="fa-brands fa-google mr-3 text-xl"></i>
            Login with Google
          </button>
        </div>

        <div>
          <button
            onClick={() => handleSignIn("github")} 
            className="w-full bg-[#24292e] text-white border-none rounded-[4px] py-3 px-5 text-base font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#2f363d] flex items-center justify-center"
          >
            <i className="fab fa-github text-xl mr-3"></i>
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn

    