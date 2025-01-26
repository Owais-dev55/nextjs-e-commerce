'use client'
export type Products = {
    _id:string
    title:string,
    price: number,
    quantity?:number,
    imageUrl:string | StaticImageData
}

import { StaticImageData } from "next/image"
import React, { createContext, } from "react"

export const CartContext = createContext<{
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
    cartItems: Products[] ;
    setCartItems: (items: Products[]) => void
    wishlitItems: Products[]
    setWishlitItems: (items: Products[]) => void

}>({
    count: 0,
    setCount: () => {},
    cartItems:[],
    setCartItems: () => {},
    wishlitItems: [],
    setWishlitItems: () => {}
})



