"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import ProductCard from "@/Component/ProductCard/ProductCard";
import type { ProductsProps } from "@/Component/ProductCard/ProductCard";
const ITEMS_PER_PAGE = 8;

const MadeComponent = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: ProductsProps[] = await client.fetch(
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
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
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
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {currentPosts.length > 0 ? (
          currentPosts.map((product: ProductsProps) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              dicountPercentage={product.dicountPercentage}
              category="furniture"
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>

      {/* Compact Pagination */}
      <div className="flex justify-center mt-8 mb-12">
        <div className="inline-flex rounded-md bg-white border border-[#BDBDBD] shadow-sm">
          <button
            className={`h-20 px-3 flex items-center border-r justify-center border-[#BDBDBD] rounded-l-md ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed"
                : "cursor-pointer text-[#0E3A5D] hover:bg-[#E9E9E9]"
            }`}
            onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="text-sm font-medium">Previous</span>
          </button>

          <div className="flex">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={`w-10 h-20 flex justify-center items-center border-r border-[#E9E9E9] ${
                    page === currentPage
                      ? "bg-[#0E3A5D] text-white"
                      : "text-[#0E3A5D] hover:bg-[#E9E9E9]"
                  }`}
                  onClick={() => goToPage(page)}
                >
                  <span className="text-sm font-medium">{page}</span>
                </button>
              )
            )}
          </div>

          <button
            className={`h-20 w-20 px-3 flex justify-center  items-center rounded-r-md ${
              currentPage === totalPages
                ? "text-gray-300 cursor-not-allowed"
                : "cursor-pointer text-[#0E3A5D] hover:bg-[#E9E9E9]"
            }`}
            onClick={() =>
              currentPage < totalPages && goToPage(currentPage + 1)
            }
            disabled={currentPage === totalPages}
          >
            <span className="text-sm font-medium">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MadeComponent;
