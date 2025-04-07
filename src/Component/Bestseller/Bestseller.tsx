"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsProps } from "../ProductCard/ProductCard";

export default function BestSeller() {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: ProductsProps[] = await client.fetch(
          `*[_type == "apiproduct" && 
   ("Featured Products" in Tags)] {
          _id ,
              Title , 
              Description , 
              BulletPoints , 
              DiscountedPrice ,
              OriginalPrice,
              "MainImage": MainImage.asset->url ,
              "Images": Images.asset->url ,
              DescriptionImages,
              Category,
              Tags,
              Rating,
              Reviews,
              Stock,
              Colors,
          }`
        );
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="w-screen h-screen flex justify-center items-center">
         <div className="loader"></div>
       </div>; 
 }
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8 lg:mb-12 text-[Montserrat] space-y-2">
        <h4 className="text-[#4A4A4A] font-normal text-lg sm:text-xl lg:text-2xl leading-8 tracking-wide">
          Featured Projects
        </h4>
        <h3 className="text-[#1A1A1A] font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-wide">
          BestSeller Products
        </h3>
        <p className="text-[#4A4A4A] font-normal text-sm sm:text-base lg:text-lg leading-relaxed tracking-wide max-w-2xl mx-auto">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className=" lg:min-h-0 lg:h-[215px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 h-full">
          {products.length > 0 ? (
            products.map((product: ProductsProps) => (
              <div key={product._id} className="relative h-full">
                <ProductCard
                  _id={product._id}
                  MainImage={product.MainImage}
                  Title={product.Title}
                  OriginalPrice={product.OriginalPrice}
                  DiscountedPrice={product.DiscountedPrice}
                  Category={product.Category}
                />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  </main>
  );
}
