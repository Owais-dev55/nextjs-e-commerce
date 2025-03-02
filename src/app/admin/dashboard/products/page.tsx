'use client'
import React , {useState , useEffect } from 'react'
import { ProductsProps } from "@/Component/ProductCard/ProductCard"
import { client } from "@/sanity/lib/client"
import Image from 'next/image'
const Products = () => {
 const [products, setProducts] = useState<ProductsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data:ProductsProps[] = await client.fetch(
          `*[_type == "product" ] {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image src={product.imageUrl || "/placeholder.svg"} alt={product.title} layout="fill" objectFit="cover" />
              {product. dicountPercentage && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-bold">
                  {product. dicountPercentage}% OFF
                </div>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">${typeof product.price === 'number' ? product.price.toFixed(2) : parseFloat(product.price).toFixed(2)}</span>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products