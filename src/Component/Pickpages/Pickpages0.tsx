"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import type { ProductsProps } from "../ProductCard/ProductCard"
import AddtoCart from "../FrequentComponent/AddtoCart"
import image2 from "@/public/image/Adobe Express - file.png"

const PremiumProductShowcase = () => {
  const [products, setProducts] = useState<ProductsProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: ProductsProps[] = await client.fetch(
          `*[_type == "apiproduct" ] {
            _id,
            Title, 
            Description, 
            BulletPoints, 
            DiscountedPrice,
            OriginalPrice,
            "MainImage": MainImage.asset->url,
            "Images": Images.asset->url,
            DescriptionImages,
            Category,
            Tags,
            Rating,
            Reviews,
            Stock,
            Colors,
          }`,
        )
        setProducts(products)
      } catch (error) {
        console.error("Error fetching products:", error)
        console.log(loading)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const featuredProduct = products && products.length > 0 ? products[3] : null
  const featuredProductId = featuredProduct ? featuredProduct._id : ""

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-[#0E3A5D] to-[#071E31] mt-80 font-sans">
      <div className="w-full max-w-[1440px] mx-auto relative">

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-2 min-h-[700px] px-12 py-16 animate-fadeIn">
          {/* Left Text */}
          <div className="flex items-center justify-center">
            <div className="max-w-md text-white">
              <span className="inline-block text-sm tracking-[0.2em] uppercase text-[#23A6F0] mb-6">
                Summer 2025
              </span>

              <h1 className="text-5xl font-semibold mb-6 leading-tight tracking-wide">
                {featuredProduct ? featuredProduct.Title : "Vita Classic Product"}
              </h1>

              <p className="text-lg leading-relaxed text-white/80 mb-10">
                {featuredProduct
                  ? featuredProduct.Description?.substring(0, 150) + "..."
                  : "Immerse in Pure Sound: Every Beat Tells a Story. Premium audio, redefined for you."}
              </p>

              <div className="mb-10">
                <span className="text-4xl font-semibold text-[#23A6F0]">
                  {featuredProduct?.DiscountedPrice
                    ? `PKR ${featuredProduct.DiscountedPrice}`
                    : featuredProduct?.OriginalPrice
                    ? `PKR ${featuredProduct.OriginalPrice}`
                    : "PKR 16,499"}
                </span>
                {featuredProduct?.DiscountedPrice && featuredProduct?.OriginalPrice && (
                  <span className="text-xl text-white/50 line-through ml-4">
                    PKR {featuredProduct.OriginalPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-6">
                {featuredProduct ? (
                  <AddtoCart
                    _id={String(featuredProduct._id)}
                    imageUrl={featuredProduct.MainImage}
                    price={Number(featuredProduct.DiscountedPrice || featuredProduct.OriginalPrice)}
                    title={featuredProduct.Title}
                    quantity={1}
                    key={featuredProduct._id}
                  />
                ) : (
                  <button className="w-full h-full">Add to cart</button>
                )}

                <Link href={featuredProductId ? `/products/${featuredProductId}` : "/products"}>
                  <div className="h-12 w-40 border border-white text-white font-medium rounded-full hover:bg-white hover:text-[#0E3A5D] transition-all duration-300 shadow-md flex items-center justify-center">
                    View details
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center">
            <div className="w-[500px] h-[500px] relative drop-shadow-2xl hover:scale-105 transition-transform duration-300">
              <Image
                src={image2 || "/placeholder.svg"}
                alt={featuredProduct?.Title || "Premium Product"}
                className="object-contain rounded-xl"
                fill
                sizes="500px"
              />
            </div>
          </div>
        </div>

        {/* Mobile & Tablet View */}
        <div className="block lg:hidden px-6 py-12 animate-fadeIn text-white text-center">
          <span className="text-sm uppercase tracking-widest text-[#23A6F0] mb-4 block">
            Summer 2025
          </span>

          <h1 className="text-3xl font-semibold mb-4">
            {featuredProduct?.Title || "Vita Classic Product"}
          </h1>

          <Image
            src={image2 || "/placeholder.svg"}
            alt={featuredProduct?.Title || "Premium Product"}
            className="mx-auto mb-6 rounded-xl object-contain"
            width={300}
            height={300}
          />

          <p className="text-base text-white/80 mb-6">
            {featuredProduct?.Description?.substring(0, 100) ||
              "Immerse in Pure Sound. Premium audio, redefined."}
          </p>

          <div className="text-3xl font-semibold text-[#23A6F0] mb-4">
            {featuredProduct?.DiscountedPrice
              ? `PKR ${featuredProduct.DiscountedPrice}`
              : featuredProduct?.OriginalPrice
              ? `PKR ${featuredProduct.OriginalPrice}`
              : "PKR 16,499"}
          </div>

          <div className="flex flex-col items-center gap-4">
            {featuredProduct ? (
              <AddtoCart
                _id={String(featuredProduct._id)}
                imageUrl={featuredProduct.MainImage}
                price={Number(featuredProduct.DiscountedPrice || featuredProduct.OriginalPrice)}
                title={featuredProduct.Title}
                quantity={1}
                key={featuredProduct._id}
              />
            ) : (
              <button className="w-full h-full">Add to cart</button>
            )}

            <Link href={featuredProductId ? `/products/${featuredProductId}` : "/products"}>
              <div className="h-10 w-36 border border-white text-white text-sm rounded-full hover:bg-white hover:text-[#0E3A5D] transition-all duration-300 shadow-md flex items-center justify-center">
                View details
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PremiumProductShowcase
