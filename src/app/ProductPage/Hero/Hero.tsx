"use client"

import Image, { type StaticImageData } from "next/image"
import Navbar from "@/Component/Navbar/Navbar"
import Link from "next/link"
import AddtoCart from "@/Component/FrequentComponent/AddtoCart"
import AddtoWishList from "@/Component/FrequentComponent/AddtoWishList"
import { useState } from "react"

interface ProductProps {
  _id: string
  Title: string
  MainImage: string | StaticImageData
  Images: (StaticImageData | string)[]
  OriginalPrice: number
  Description: string
  BulletPoints: string[]
  Stock: number
  Rating: number
  Reviews: number
  Category: string
  colors?: string[]
}

const Hero = ({
  _id,
  Title,
  MainImage,
  Images,
  OriginalPrice,
  BulletPoints,
  Category,
  Rating,
  Reviews,
  Stock,
}: ProductProps) => {
  
  const [isZoomed, setIsZoomed] = useState(false)
  
  // Combine MainImage with the rest of the images
  const allImages = [MainImage, ...Images];

  // State for the currently displayed image
  const [selectedImage, setSelectedImage] = useState(MainImage);

  const renderRatingStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fa-solid fa-star w-[22px] text-[#F3CD03]"></i>)
    }

    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fa-solid fa-star-half-stroke w-[22px] text-[#F3CD03]"></i>)
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-star-${i}`} className="fa-regular fa-star w-[22px] text-[#F3CD03]"></i>)
    }

    return stars
  }

  return (
    <div className="text-[Montserrat] bg-[#FAFAFA]">
      <Navbar />
      {/* Breadcrumb Navigation */}
      <div className="w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center">
            <nav className="flex items-center space-x-2" aria-label="Breadcrumb">
              <Link
                href="/"
                className="text-xs font-bold text-[#1A1A1A] tracking-[0.2px] hover:text-[#23A6F0] transition-colors"
              >
                Home
              </Link>
              <i className="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
              <span className="text-xs font-bold text-[#BDBDBD] tracking-[0.2px]">Product</span>
              <i className="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
              <span className="text-xs font-bold text-[#BDBDBD] tracking-[0.2px]">{Category}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Product Images - Left Column */}
          <div className="w-full lg:w-1/2">
            {/* Main Image */}
            <div
              className="relative w-full h-[440px] rounded-md overflow-hidden bg-white"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={Title}
                layout="fill"
                style={{
                  objectFit: "cover",
                  transform: isZoomed ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="rounded-md"
              />
              {/* Navigation Arrows */}
            </div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {allImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(typeof image === "string" ? image : image)}
                  className={`h-[75px] relative rounded-md overflow-hidden cursor-pointer ${
                    selectedImage === (typeof image === "string" ? image : image)
                      ? "ring-1 ring-[#23A6F0]"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={typeof image === "string" ? image : image || "/placeholder.svg"}
                    alt={`Product thumbnail ${index + 1}`}
                    layout="fill"
                    style={{ objectFit: "cover" }}
                    className="transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details - Right Column */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl font-normal text-[#1A1A1A] mb-2">{Title}</h1>
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <div className="flex">{renderRatingStars(Rating)}</div>
                <span className="text-xs text-[#4A4A4A]">{Reviews} reviews</span>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-[#1A1A1A]">${OriginalPrice}</h2>
            </div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-xs font-medium text-[#4A4A4A]">Availability:</span>
              <span className={`text-xs font-medium ${Stock > 0 ? "text-[#D8A31A]" : "text-red-500"}`}>
                {Stock > 0 ? `In Stock (${Stock} items)` : "Out of Stock"}
              </span>
            </div>
            <div className="w-full h-px bg-gray-200 my-4"></div>
            <div className="mb-4">
              <h3 className="text-sm font-bold mb-2">Product Features:</h3>
              <div className="bg-white rounded-md p-4">
                <ul className="list-disc pl-5 space-y-2">
                  {BulletPoints &&
                    BulletPoints.map((point, index) => (
                      <li key={index} className="text-xs text-[#4A4A4A]">{point}</li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <AddtoCart
                _id={_id}
                imageUrl={MainImage}
                price={OriginalPrice}
                title={Title}
                key={`cart-${_id}`}
                quantity={1}
              />
              <AddtoWishList
                _id={_id}
                imageUrl={MainImage}
                price={OriginalPrice}
                title={Title}
                key={`wishlist-${_id}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
