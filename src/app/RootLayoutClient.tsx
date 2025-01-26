'use client';

import React, { useState } from "react";
import { CartContext , Products } from "@/Utilities/Context";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const [cartItems , setCartItems] = useState<Products[]>([])
  const [wishlitItems , setWishlitItems] = useState<Products[]>([])

  
  return (
    <CartContext.Provider value={{ count, setCount , cartItems , setCartItems  , wishlitItems , setWishlitItems }}>
      {children}
    </CartContext.Provider>
  );
}
