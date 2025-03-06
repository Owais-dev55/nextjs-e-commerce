'use client'
import React from "react";
import { useContext } from "react";
import { CartContext, Products } from "@/Utilities/Context";
import {  toast } from 'react-toastify';
const AddtoCart = ({ _id, title, price, imageUrl }: Products) => {
  const { setCount, count, cartItems, setCartItems } = useContext(CartContext);
  
  const addItemToCart = (item: Products) => {
    const newItem = { ...item, quantity: 1 };
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem._id === newItem._id
    );
    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity! + 1,
      };
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, newItem]);
    }

    setCount(count + 1);
      toast.success("Item added to Cart")
    
  };

  
  return (
    <div>
      <button
        className="bg-[#0E3A5D] w-[148px] h-11 rounded-md pt-[10px] pb-[10px] pr-5 pl-5"
        onClick={() =>
          addItemToCart({
            _id,
            title,
            price,
            imageUrl,
            quantity: 1,
          })
        }
      >
        <h6 className="w-[108px] h-6 font-bold text-sm text-[#FFFFFF] tracking-[0.2px] leading-6">
          Add to cart
        </h6>
      </button>
    </div>
  );
};

export default AddtoCart;
