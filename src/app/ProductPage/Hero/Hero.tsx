"use client";
import Image, { StaticImageData } from "next/image";
import Navbar from "@/app/ProductListpage/Navbar/Navbar";
import Link from "next/link";
import { useContext } from "react";
import { CartContext, Products } from "@/Utilities/Context";

interface ProductProps {
  _id: string;
  title: string;
  imageUrl: string | StaticImageData;
  price: number;
  description: string;
  colors?: string[];
}

const Hero = ({
  _id,
  title,
  imageUrl,
  price,
  description,
  colors = ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
}: ProductProps) => {

  const { setCount, count, cartItems, setCartItems } = useContext(CartContext);
  const addItemToCart = (item: Products) => {
    const newItem = { ...item, quantity: 1 };
    

    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem._id === newItem._id
    );
  
    if (existingItemIndex >= 0) {
      // Item exists, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity! + 1,
      };
      setCartItems(updatedCartItems);
    } else {
  
      setCartItems([...cartItems, newItem]);
    }
  
    setCount(count + 1);
  };
  
  return (
    <div className="text-[Montserrat]">
      <Navbar />
      <div className="gap-8 w-full h-24 bg-[#FAFAFA] flex items-center">
        <div className="h-8 w-[510px] -mt-2">
          <div className="w-[119px] h-11 gap-4 pt-3 bt-3 flex">
            <Link href={'/'}>
            <h3 className="w-11 h-6 font-bold ml-44 text-[#252B42] tracking-[0.2px] leading-6 text-sm">
              Home
            </h3>
            </Link>
            <div className="w-auto h-4 text-[#BDBDBD]">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <h6 className="w-9 h-6 font-bold text-[#BDBDBD] tracking-[0.2px] leading-6 text-sm">
            Product
            </h6>
          </div>
        </div>
        <div className="gap-1 w-[509px] h-11 flex justify-end"></div>
      </div>

      {/* Product Section - Desktop layout */}
      <div className="w-full bg-[#FAFAFA] h-[598px] hidden lg:flex">
        <div className="w-[1050px] h-full pb-12 pl-[195px] flex gap-8">
          {/* Left Side - Images */}
          <div className="w-[510px] h-full rounded-md">
            <div className="w-[506px] h-[440px] relative">
              <div className="absolute top-[60%] ml-4 flex justify-between w-[470px] z-20 text-4xl text-[#FAFAFA]">
                <i className="fa-solid fa-chevron-left"></i>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  src={imageUrl}
                  alt="product"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="w-[219px] h-[75px] mt-16 flex justify-around">
              <div className="w-[100px] h-full relative overflow-hidden rounded-md">
                <Image
                  src={imageUrl}
                  alt="productImage"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] h-full relative overflow-hidden rounded-md opacity-50">
                <Image
                  src={imageUrl }
                  alt="productImage"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="w-[510px] h-auto -mt-3">
            <h4 className="h-8 w-auto pt-3 pl-6 font-normal text-xl leading-8 tracking-[0.2px] text-[#252B42]">
              {title}
            </h4>
            <div className="w-[221px] h-6 pt-5 pl-6 left-6 gap-[10px] flex">
              <div className="h-[22px] w-[140px] gap-1 text-[#F3CD03]">
                <i className="fa-solid fa-star w-[22px]"></i>
                <i className="fa-solid fa-star w-[22px]"></i>
                <i className="fa-solid fa-star w-[22px]"></i>
                <i className="fa-solid fa-star w-[22px]"></i>
                <i className="fa-regular fa-star w-[22px]"></i>
              </div>
              <h6 className="h-6 w-24 font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                10 Reviews
              </h6>
            </div>
            <h6 className="h-8 w-[108px] pl-6 pt-10 font-bold text-2xl leading-8 tracking-wider text-[#252B42]">
              ${price}
            </h6>
            <div className="w-[169px] h-6 pt-9 pl-6 gap-1 flex">
              <h6 className="h-6 w-[94px] font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                Availability :
              </h6>
              <h6 className="h-6 w-[60px] font-bold text-sm leading-6 tracking-[0.2px] text-[#23A6F0]">
                In Stock
              </h6>
            </div>
            <p className="h-auto w-[464px] pt-16 pl-6 font-normal text-sm leading-5 tracking-[0.2px] text-[#858585] -mb-14">
              {description.substring(0, 400)}
            </p>
            <hr className="w-[455px] relative top-20 pl-6 text-center border text-[#BDBDBD]" />

            <div className="w-[150px] pt-28 h-8 gap-2 pl-6 flex">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-[30px] h-[30px] rounded-[50%]"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>

            <div className="w-[298px] h-11 gap-2 pl-6 pt-14 flex">
              <button
                className="bg-[#23A6F0] w-[148px] h-11 rounded-md pt-[10px] pb-[10px] pr-5 pl-5"
                onClick={() =>
                  addItemToCart({
                    _id,
                    title,
                    price,
                    imageUrl,
                    quantity: 1,
                  })
                }
              >
                <h6 className="w-[108px] h-6 font-bold text-sm text-[#FFFFFF] tracking-[0.2px] leading-6">
                  Add to cart
                </h6>
              </button>
              <div className="w-10 h-10 rounded-[50%] bg-[#FFFFFF] border border-[#E8E8E8] flex">
                <i className="fa-regular fa-heart w-5 h-5 pt-3 pl-[9px] text-[#252B42]"></i>
              </div>
              <div className="w-10 h-10 rounded-[50%] bg-[#FFFFFF] border border-[#E8E8E8] flex">
                <Link href={"/Cart"}>
                  <i className="fa-solid fa-cart-shopping w-5 h-5 pt-3 pl-[9px] text-[#252B42]"></i>
                </Link>
              </div>
              <div className="w-10 h-10 rounded-[50%] bg-[#FFFFFF] border border-[#E8E8E8] flex">
                <i className="fa-solid fa-eye w-5 h-5 pt-3 pl-[9px] text-[#252B42]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden bg-[#FAFAFA] px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Mobile Product Images */}
          <div className="w-full">
            <div className="relative w-full h-[440px]">
              <div className="absolute top-[60%] w-full px-4 flex justify-between z-20 text-4xl text-[#FAFAFA]">
                <i className="fa-solid fa-chevron-left"></i>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  src={imageUrl}
                  alt="product"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="w-[219px] h-[75px] mt-8 flex gap-4">
              <div className="w-[100px] h-full relative overflow-hidden rounded-md">
                <Image
                  src="/image/listimage2.jpg"
                  alt="productImage"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="w-[100px] h-full relative overflow-hidden rounded-md opacity-50">
                <Image
                  src={imageUrl}
                  alt="productImage"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>

          {/* Mobile Product Details */}
          <div className="w-full">
            <h4 className="font-normal text-xl mb-4 text-[#252B42]">{title}</h4>
            <div className="flex items-center gap-2 mb-6">
              <div className="text-[#F3CD03] flex">
                {[1, 2, 3, 4].map((star) => (
                  <i key={star} className="fa-solid fa-star w-[22px]"></i>
                ))}
                <i className="fa-regular fa-star w-[22px]"></i>
              </div>
              <h6 className="font-bold text-sm text-[#737373]">10 Reviews</h6>
            </div>
            <h6 className="font-bold text-2xl text-[#252B42] mb-4">${price}</h6>
            <div className="flex items-center gap-1 mb-6">
              <h6 className="font-bold text-sm text-[#737373]">
                Availability :
              </h6>
              <h6 className="font-bold text-sm text-[#23A6F0]">In Stock</h6>
            </div>
            <p className="text-sm text-[#858585] mb-8">
              {description.substring(0, 400)}
            </p>
            <hr className="mb-8" />

            <div className="flex gap-2 mb-8">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-[30px] h-[30px] rounded-[50%]"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                className="bg-[#23A6F0] px-5 py-[10px] rounded-md"
                onClick={() =>
                  addItemToCart({
                    _id,
                    title,
                    price,
                    imageUrl,
                    quantity: 1,
                  })
                }
              >
                <h6 className="font-bold text-sm text-white">Add to cart</h6>
              </button>
              <div className="w-10 h-10 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center">
                <i className="fa-regular fa-heart text-[#252B42]"></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center">
                <i className="fa-solid fa-cart-shopping text-[#252B42]"></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center">
                <i className="fa-solid fa-eye text-[#252B42]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
