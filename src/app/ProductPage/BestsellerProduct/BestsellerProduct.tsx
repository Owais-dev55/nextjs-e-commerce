'use client'
import React, { useEffect, useState } from "react";
import ProductCard from "@/Component/ProductCard/ProductCard";
import { client } from "@/sanity/lib/client";
import { ProductsProps } from "@/Component/ProductCard/ProductCard";

const BestsellerProduct = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data:ProductsProps[] = await client.fetch(
          `*[_type == "product" && ("modern" in tags || "elegance" in tags || "furniture" in tags)] {
            _id,
            title,
            "imageUrl": productImage.asset->url,
            price,
            tags,
            dicountPercentage,
            description,
            isNew
          }`
        );
        setProducts(data);
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
    <div className="w-full min-h-screen lg:h-[1986px] bg-[#FAFAFA]">
      <div className="w-full max-w-[1124px] px-4 lg:px-0 lg:pl-[195px] py-12 lg:pt-12 lg:pb-12">
        <div className="w-full lg:w-[1040px]">
          <h3 className="font-bold leading-8 text-2xl tracking-wider mb-10 lg:pl-0 pl-24">
            BESTSELLER PRODUCTS
          </h3>
          <div className="w-full h-[2px] bg-[#ECECEC]"></div>
        </div>
        <div className="w-full lg:w-[1049px] mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
              key={product._id}
              _id={product._id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              dicountPercentage={product.dicountPercentage}
              category='furniture'
            />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestsellerProduct;
