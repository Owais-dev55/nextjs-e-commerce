"use client";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import AddtoCart from "../FrequentComponent/AddtoCart";
import AddtoWishList from "../FrequentComponent/AddtoWishList";

export interface ProductsProps {
  OriginalPrice: string | number;
  _id: string | number;
  Title: string;
  MainImage: string | StaticImageData;
  Category: string;
  DiscountedPrice: number | string | undefined;
  isNew?: boolean;
  isSale?: boolean;
  rating?: number;
  Description?: string;
  onclick?: () => void;
}

const ProductCard = ({
  MainImage,
  _id,
  Title,
  OriginalPrice,
  DiscountedPrice,
  Category,
  isSale = false,
  rating = 4.5,
  onclick,
}: ProductsProps) => {
  return (
    <div
      key={_id}
      onClick={onclick}
      className="w-full max-w-[390px] mx-auto group relative"
    >
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <AddtoWishList 
      _id={String(_id)}
      imageUrl={MainImage}
      price={Number(DiscountedPrice || OriginalPrice)}
      title={Title}
      key={_id}
        />
      </div>

      <div className="relative flex flex-col h-full w-full rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {isSale && DiscountedPrice && (
            <span className="px-2 py-1 text-xs font-medium rounded-md bg-rose-500 text-white">
              Sale
            </span>
          )}
        </div>

        <div className="relative w-full h-64 overflow-hidden">
          <Link href={`/products/${_id}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-0"></div>
            <Image
              src={MainImage || "/placeholder.svg"}
              alt={Title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </Link>
        </div>

        <div className="absolute bottom-[6.5rem] left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <AddtoCart
            _id={String(_id)}
            imageUrl={MainImage}
            price={Number(DiscountedPrice || OriginalPrice)}
            title={Title}
            quantity={1}
            key={_id}
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow flex flex-col p-5 gap-3">
          <div className="flex justify-between items-start">
            <Link
              href="#"
              className="text-blue-600 font-medium text-xs uppercase tracking-wider hover:text-blue-700 transition-colors"
            >
              {Category}
            </Link>

            {/* Star Rating */}
            <div className="flex items-center gap-1">
              <i className="text-amber-400">★</i>
              <span className="text-xs font-medium text-gray-600">
                {rating}
              </span>
            </div>
          </div>

          <Link
            href={`/products/${_id}`}
            className="group-hover:text-blue-600 transition-colors"
          >
            <h3 className="text-gray-800 font-medium text-base tracking-wide line-clamp-2 h-12">
              {Title}
            </h3>
          </Link>

          <div className="flex items-baseline mt-auto">
            {DiscountedPrice && (
              <span className="text-gray-400 text-sm font-normal line-through mr-2">
                PKR{DiscountedPrice}
              </span>
            )}
            <span
              className={`font-semibold text-lg ${DiscountedPrice ? "text-rose-600" : "text-gray-800"}`}
            >
              PKR{OriginalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
