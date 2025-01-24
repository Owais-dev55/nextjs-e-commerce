"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import ProductCard from "@/Component/ProductCard/ProductCard";
import { ProductsProps } from "@/Component/ProductCard/ProductCard";
const ITEMS_PER_PAGE = 8;

const MadeComponent = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data:ProductsProps[] = await client.fetch(
          `*[_type == "product"] {
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
    return <div>Loading...</div>;
  }

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const currentPosts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="lg:w-[1049px] lg:h-auto md:w-[414px] md:h-[3510px] gap-8 grid lg:grid-cols-4 md:grid-cols-1 mx-auto">
        {currentPosts.length > 0 ? (
          currentPosts.map((product: ProductsProps) => (
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

      <div className="w-[1049px] lg:ml-[470px] flex justify-center mt-8">
        <div className="h-[76px] lg:w-[813px] md:w-[313px] flex items-center justify-center rounded-md bg-[#FFFFFF] border-[#BDBDBD]">
          <div className="w-full h-full flex flex-row -mt-5">
            <div
              className={`bg-[#F3F3F3] h-full w-[84px] flex justify-center items-center border-[#BDBDBD] border rounded-l-lg ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "cursor-pointer"
              } hover:bg-[#E9E9E9]`}
              onClick={() => goToPage(1)}
            >
              <h6 className="font-bold tracking-[0.2px] leading-6 text-sm w-10 h-6 text-[#BDBDBD]">
                Previous
              </h6>
            </div>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <div
                  key={page}
                  className={`w-[46px] flex justify-center items-center h-full border border-[#E9E9E9] ${
                    page === currentPage
                      ? "bg-[#23A6F0] text-white"
                      : "text-[#23A6F0] hover:bg-[#E9E9E9]"
                  } cursor-pointer`}
                  onClick={() => goToPage(page)}
                >
                  <h6 className="font-bold tracking-[0.2px] leading-6 text-sm w-[6px] h-6">
                    {page}
                  </h6>
                </div>
              )
            )}

            <div
              className={`h-full w-[84px] flex justify-center items-center border-[#BDBDBD] border rounded-r-lg ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "cursor-pointer"
              } hover:bg-[#E9E9E9]`}
              onClick={() => goToPage(currentPage + 1)}
            >
              <h6 className="font-bold tracking-[0.2px] leading-6 text-sm w-8 h-6 text-[#23A6F0]">
                Next
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadeComponent;
