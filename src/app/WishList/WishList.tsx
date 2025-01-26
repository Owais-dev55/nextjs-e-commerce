"use client";

import { useContext } from "react";
import Image from "next/image";
import { CartContext } from "@/Utilities/Context";
import AddtoCart from "@/Component/FrequentComponent/AddtoCart";
import Link from "next/link";

export default function WishlistItems() {
  const { wishlitItems = [], setWishlitItems } = useContext(CartContext);

  const removeItem = (id: string) => {
    setWishlitItems(wishlitItems.filter((item) => item._id !== id));
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {wishlitItems.map((item) => (
        <div key={item._id} className="border rounded-lg p-4 flex flex-col">
          <Link href={`/products/${item._id}`}>
            <div className="relative h-48 mb-4">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </Link>
          <h2 className="text-lg font-semibold mb-2">
            {item.title || "Untitled"}
          </h2>
          <p className="text-gray-600 mb-4">
            ${item.price ? item.price.toFixed(2) : "0.00"}
          </p>
          <div className="mt-auto flex justify-between">
            <button
              className="btn btn-outline btn-sm"
              onClick={() => removeItem(item._id)}
            >
              <i className="fa-solid fa-trash text-red-600 text-xl hover:scale-125"></i>
              <span className="sr-only">Remove from wishlist</span>
            </button>
            <AddtoCart
              _id={item._id}
              imageUrl={item.imageUrl}
              price={item.price}
              title={item.title}
              quantity={item.quantity}
              key={item._id}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
