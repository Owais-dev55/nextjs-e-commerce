'use client';

import { CartContext } from '@/Utilities/Context';
import { StaticImageData } from 'next/image';
import React, { useContext } from 'react';

interface WishProps {
  _id: string;
  title: string;
  price: number;
  imageUrl: string | StaticImageData;
}

const AddtoWishList = ({ _id, title, price, imageUrl }: WishProps) => {

    const { wishlitItems = [], setWishlitItems } = useContext(CartContext);

  const handleClick = (item: WishProps) => {
    const newItem = { ...item };
    const existingItem = wishlitItems.find(
      (wishlitItem) => wishlitItem._id === newItem._id
    );
    if (!existingItem) {
      setWishlitItems([...wishlitItems, newItem]);
    }
  };

  return (
    <div>
      <div
        onClick={() =>
          handleClick({
            _id,
            title,
            price,
            imageUrl,
          })
        }
        className="w-10 h-10 rounded-full bg-white border border-gray-300 flex cursor-pointer"
      >
        <i className="fa-regular fa-heart w-5 h-5 pt-3 pl-[9px] text-gray-800"></i>
      </div>
    </div>
  );
};

export default AddtoWishList;
