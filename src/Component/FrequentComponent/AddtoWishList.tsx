"use client";

import { CartContext } from "@/Utilities/Context";
import type { StaticImageData } from "next/image";
import React, { useContext, useState, useEffect } from "react";

interface WishProps {
  _id: string;
  title: string;
  price: number;
  imageUrl: string | StaticImageData;
}

const AddtoWishList = ({ _id, title, price, imageUrl }: WishProps) => {
  const { wishlitItems = [], setWishlitItems } = useContext(CartContext);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const itemInWishlist = wishlitItems.some((item) => item._id === _id);
    setIsInWishlist(itemInWishlist);
  }, [wishlitItems, _id]);

  const handleClick = () => {
    const newItem = { _id, title, price, imageUrl };
    if (isInWishlist) {
      setWishlitItems(wishlitItems.filter((item) => item._id !== _id));
    } else {
      setWishlitItems([...wishlitItems, newItem]);
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="w-10 h-10 rounded-full bg-white border border-gray-300 flex cursor-pointer items-center justify-center"
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        <i
          className={`fa-${isInWishlist ? "solid" : "regular"} fa-heart w-5 h-5 text-center text-lg ${isInWishlist ? "text-red-500" : "text-gray-800"}`}
        ></i>
      </div>
    </div>
  );
};

export default AddtoWishList;
