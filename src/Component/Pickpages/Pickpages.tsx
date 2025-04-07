"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import image from "@/public/image/Adobe Express - file.png"
import image2 from "@/public/image/decription airpods.webp"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import type { ProductsProps } from "../ProductCard/ProductCard"
import AddtoCart from "../FrequentComponent/AddtoCart"

const Pickpages = () => {
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
      } finally {
        console.log(loading);
        setLoading(false)
      }
    }

    fetchProducts()
  }, [loading])

  const featuredProduct = products && products.length > 0 ? products[0] : null
  const featuredProductId = featuredProduct ? featuredProduct._id : ""

  return (
    <div className="w-full overflow-x-hidden">
      {/* First Section - Blue Background */}
      <div className="w-full max-w-[1440px] text-white h-auto mx-auto mt-[120px] sm:mt-[150px] md:mt-[200px] lg:mt-[370px] font-montserrat bg-[#0E3A5D] relative">
        {/* Mobile & Tablet Layout */}
        <div className="block lg:hidden px-4 sm:px-8 py-8 sm:py-10 md:py-12 text-center">
          <h4 className="font-normal text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 tracking-[0.2px]">Summer 2025</h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-[0.2px] w-[262px] sm:w-[350px] md:w-[450px] mx-auto">
            Vita Classic Product
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 tracking-[0.2px] px-4 w-[262px] sm:w-[350px] md:w-[450px] mx-auto">
            Immerse in Pure Sound: Every Beat Tells a Story.
          </p>
          <div className="flex flex-col items-center gap-4 mb-8 sm:mb-10 md:mb-12">
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl tracking-[0.1px]">
              {featuredProduct && featuredProduct.DiscountedPrice ? `PKR${featuredProduct.DiscountedPrice}` : "16.48"}
            </h3>
          </div>
          <div className="w-full sm:w-[80%] md:w-[70%] aspect-[3/4] sm:aspect-[4/5] relative mb-8 mx-auto">
            <Image
              src={image || "/placeholder.svg"}
              alt="Vita Classic Product"
              className="object-contain bg-transparent"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between px-8 xl:px-16 py-12">
          {/* Left Side - Text Content */}
          <div className="max-w-[500px] xl:max-w-[600px]">
            <h4 className="font-normal text-xl xl:text-2xl mb-4 xl:mb-6 tracking-[0.2px]">Summer 2025</h4>
            <h1 className="text-5xl xl:text-6xl font-bold mb-4 xl:mb-6 leading-tight tracking-[0.2px]">
              Vita Classic Product
            </h1>
            <p className="font-normal text-lg xl:text-xl mb-4 xl:mb-6 tracking-[0.4px]">
              Immerse in Pure Sound: Every Beat Tells a Story.
            </p>
            <div className="flex items-center gap-6">
              <h3 className="font-bold text-xl xl:text-2xl tracking-[0.1px]">
                {featuredProduct && featuredProduct.DiscountedPrice
                  ? `PKR: ${featuredProduct.DiscountedPrice}`
                  : "16.48"}
              </h3>
            </div>
          </div>
          {/* Right Side - Product Image */}
          <div className="w-[400px] xl:w-[543px] h-[500px] xl:h-[650px] relative">
            <Image
              src={image || "/placeholder.svg"}
              alt="Vita Classic Product"
              className="object-contain w-full h-full"
              width={543}
              height={650}
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full max-w-[1440px] h-auto mx-auto">
        {/* Mobile & Small Tablet layout */}
        <div className="block md:hidden px-4 sm:px-6 py-6 sm:py-8 text-center mt-6 sm:mt-8">
          <h5 className="font-bold text-xs sm:text-sm tracking-widest uppercase text-[#4A4A4A] mb-4 sm:mb-6">
            SUMMER 2025
          </h5>
          <h2 className="font-bold text-xl sm:text-2xl tracking-wider text-[#1A1A1A] mb-4 sm:mb-6 w-[262px] sm:w-[350px] mx-auto">
            Part of the Neural Universe
          </h2>
          <p className="font-normal text-sm sm:text-base text-[#4A4A4A] tracking-[0.2px] mb-4 sm:mb-6 px-4 w-[212px] sm:w-[300px] mx-auto">
            Stay Energized: Charge Ahead with Confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="w-full sm:w-auto max-w-[156px] h-14 rounded-md bg-[#0E3A5D] flex justify-center items-center">
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
                <button className="font-bold text-sm leading-6 tracking-[0.2] text-[#FFFFFF]">Add to cart</button>
              )}
            </div>
            <Link
              href={featuredProductId ? `/products/${featuredProductId}` : "/products"}
              className="w-full max-w-[156px]"
            >
              <button className="w-full h-14 rounded-md border border-[#0E3A5D] text-[#0E3A5D] hover:bg-[#0E3A5D] hover:text-white transition-colors duration-300 font-bold text-sm">
                READ MORE
              </button>
            </Link>
          </div>
          <div className="w-full sm:w-[80%] h-[300px] sm:h-[400px] relative mt-6 sm:mt-8 mx-auto">
            <Image
              src={image2 || "/placeholder.svg"}
              alt="Neural Universe"
              className="object-cover rounded-lg"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw"
            />
          </div>
        </div>

        {/* Medium Tablet to Desktop Layout */}
        <div className="hidden md:flex flex-col lg:flex-row">
          {/* Image Section - Left on desktop, full width on tablet */}
          <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1">
            <div className="w-full md:w-[80%] lg:w-[704px] h-[400px] md:h-[500px] lg:h-[682px] relative  mx-auto">
              <div className="w-full lg:w-[632px] h-full lg:ml-9 relative">
                <Image
                  src={image2 || "/placeholder.svg"}
                  alt="Neural Universe"
                  className="object-cover w-full h-full rounded-lg lg:rounded-none"
                  fill
                  sizes="(max-width: 1024px) 80vw, 632px"
                />
              </div>
            </div>
          </div>

          {/* Text Section - Right on desktop, above image on tablet */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-8 md:px-12 lg:ml-[50px] xl:ml-[100px] py-8 md:py-10 order-1 lg:order-2">
            <div className="w-full max-w-[573px]">
              <h5 className="font-bold text-sm md:text-base leading-6 tracking-widest uppercase text-[#4A4A4A] mb-6 md:mb-8 lg:mb-10 text-center lg:text-left">
                SUMMER 2025
              </h5>
              <h2 className="font-bold text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[50px] tracking-wider lg:tracking-widest text-[#1A1A1A] mb-6 md:mb-8 lg:mb-10 text-center lg:text-left">
                Part of the Neural Universe
              </h2>
              <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[30px] tracking-[0.2px] text-[#4A4A4A] mb-6 md:mb-8 lg:mb-10 max-w-[450px] lg:max-w-[350px] mx-auto lg:mx-0 text-center lg:text-left">
                Stay Energized: Charge Ahead with Confidence.
              </p>
              <div className="h-14 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="w-full sm:w-[156px] rounded-md bg-[#0E3A5D] hover:bg-[#1C4B6E] flex justify-center items-center">
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
                    <button className="font-bold text-sm leading-6 tracking-[0.2] text-[#FFFFFF]">Add to cart</button>
                  )}
                </div>
                <Link href={featuredProductId ? `/products/${featuredProductId}` : "/products"}>
                  <div className="w-full sm:w-[156px] h-14 rounded-md border border-[#0E3A5D] text-[#0E3A5D] hover:bg-[#0E3A5D] hover:text-white flex justify-center items-center">
                    <button className="font-bold text-sm leading-6 tracking-[0.2]">READ MORE</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pickpages

