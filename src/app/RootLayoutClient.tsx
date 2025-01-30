'use client';

import React, { useEffect, useState } from "react";
import { CartContext , Products } from "@/Utilities/Context";
import { SessionProvider } from "next-auth/react";


export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const [cartItems , setCartItems] = useState<Products[]>([])
  const [wishlitItems , setWishlitItems] = useState<Products[]>([])
  const [isClient, setisClient] = useState(false)

  useEffect(()=> {
    setisClient(true)

   const savedCOunt =  localStorage.getItem("countValue")
   if(savedCOunt) {
    setCount(parseInt(savedCOunt))
   }
   const savedCart =  localStorage.getItem("cartItems")
   if(savedCart) {
    setCartItems(JSON.parse(savedCart))
   }
   const savedWishList =  localStorage.getItem("wishList")
   if(savedWishList) {
    setWishlitItems(JSON.parse(savedWishList))
   }
  } , [])

  useEffect(()=> {
    if(isClient){
    localStorage.setItem("countValue" , count.toString());
    localStorage.setItem("cartItems" , JSON.stringify(cartItems))
    localStorage.setItem("wishList" , JSON.stringify(wishlitItems))
    }
    } , [count , cartItems , wishlitItems , isClient])

    if(!isClient){
      return <div className="w-screen h-screen flex justify-center items-center">
      <div className="loader"></div>
    </div>; 
    }

  
  return (
    <CartContext.Provider value={{ count, setCount , cartItems , setCartItems  , wishlitItems , setWishlitItems }}>
      <SessionProvider >    
          {children}
      </SessionProvider>
    </CartContext.Provider>
  );
}
