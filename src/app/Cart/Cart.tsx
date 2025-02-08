"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { CartContext } from "@/Utilities/Context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const CartPage = () => {
  const { setCount, setCartItems, cartItems } = useContext(CartContext);
  const router = useRouter();
  const { status } = useSession();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState<boolean | undefined>(undefined);
  const coupon = "10OFF";
  

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value);
  };

  const applyCoupon = () => {
    if (couponCode.trim() === "") {
      setCouponApplied(undefined);
      return;
    }
    if (couponCode === coupon && !couponApplied) {
      setCouponApplied(true);
    } else {
      setCouponApplied(false);
    }
  };

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.push(`/Login?callbackUrl=${window.location.pathname}`);
    }
  }, [status, router]);

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 0),
      0
    );
  };

  const goToCheckout = () => {
    if (cartItems.length === 0) {
      return;
    } else {
      router.push(`/Checkout?total=${total}`);
    }
  };

  const handleRemoveItem = (itemId: string) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem._id !== itemId
    );
    setCartItems(updatedCartItems);
    updateCartCount(updatedCartItems);
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem._id === itemId
        ? { ...cartItem, quantity: newQuantity }
        : cartItem
    );
    setCartItems(updatedCartItems);
    updateCartCount(updatedCartItems);
  };

  const updateCartCount = (items: typeof cartItems) => {
    const newCount = items.reduce(
      (total, item) => total + (item.quantity || 0),
      0
    );
    setCount(newCount);
  };

  const totalAmount = calculateTotalAmount();
  const tax = totalAmount * 0.1;
  const shipping = totalAmount > 100 ? 0 : 50;
  const discount = couponApplied ? totalAmount * 0.1 : 0;
  const total = totalAmount + tax + shipping - discount;

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#F0F0F0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252B42] mb-8 lg:mb-12 flex items-center">
          <i className="fa-solid fa-cart-shopping mr-3 text-[#2DC071]"></i>
          Your Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-2/3 w-full bg-white rounded-lg shadow-lg p-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 text-xl font-semibold">
                Your cart is empty.
              </p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="cartitems-format cartitems-format-main flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-200 pb-6 mb-6 transition-all duration-300 hover:bg-gray-50 rounded-lg p-4"
                >
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-md"
                  />
                  <div className="flex-grow">
                    <p className="font-semibold text-sm sm:text-base lg:text-lg text-[#252B42]">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 sm:mt-0">
                    <div className="quantity-controls flex items-center border border-gray-300 rounded-full overflow-hidden">
                      <button
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                        onClick={() =>
                          handleUpdateQuantity(item._id, item.quantity! - 1)
                        }
                      >
                        -
                      </button>
                      <p className="quan px-3 py-1 bg-white">{item.quantity}</p>
                      <button
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                        onClick={() =>
                          handleUpdateQuantity(item._id, item.quantity! + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm lg:text-base font-semibold text-[#252B42]">
                      Total: ${(item.price * item.quantity!).toFixed(2)}
                    </p>
                    <button
                      className="text-red-500 hover:text-red-600 transition-colors duration-200 ml-2"
                      onClick={() => handleRemoveItem(item._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))
            )}
            <Link href={"/"} className="inline-block">
              <button className="flex items-center text-[#2DC071] hover:text-[#28a864] transition-colors duration-200 mt-4 text-sm lg:text-base font-medium">
                <i className="fa-solid fa-chevron-left mr-2"></i>
                Continue Shopping
              </button>
            </Link>
          </div>

          <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg sticky top-8">
              <h2 className="text-xl lg:text-2xl font-semibold text-[#252B42] mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-[#737373] text-sm lg:text-base">
                    Subtotal
                  </span>
                  <span className="text-[#252B42] font-semibold text-base lg:text-lg">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#737373] text-sm lg:text-base">
                    Tax
                  </span>
                  <span className="text-[#252B42] font-semibold text-base lg:text-lg">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#737373] text-sm lg:text-base">
                    Shipping
                  </span>
                  <span className="text-[#252B42] font-semibold text-base lg:text-lg">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between items-center">
                    <span className="text-[#737373] text-sm lg:text-base">
                      Discount (10%)
                    </span>
                    <span className="text-[#2DC071] font-semibold text-base lg:text-lg">
                      -${discount.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200 my-6"></div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg lg:text-xl font-semibold text-[#252B42]">
                  Total
                </span>
                <span className="text-lg lg:text-xl font-bold text-[#2DC071]">
                  ${total.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={handleCouponChange}
                  className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2DC071] focus:border-transparent"
                />
                <button
                  onClick={applyCoupon}
                  className={`px-4 py-2 rounded-md text-white font-semibold ${
                    couponApplied
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#2DC071] hover:bg-[#28a864]"
                  } transition duration-300`}
                >
                  Apply
                </button>
              </div>
              {couponApplied !== undefined && (
                <div
                  className={`p-3 rounded-md ${
                    couponApplied
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-500"
                  } mt-2`}
                >
                  {couponApplied
                    ? "Coupon Applied Successfully!"
                    : "Invalid Coupon Code"}
                </div>
              )}

              <button
                onClick={goToCheckout}
                className={`${cartItems.length > 0 ? "bg-[#2DC071]" : "bg-[#2DC071] opacity-25 cursor-not-allowed"} w-full  text-white py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-[#28a864] transition duration-300 mb-6 flex items-center justify-center shadow-md hover:shadow-lg`}
              >
                <i className="fa-regular fa-credit-card mr-2"></i>
                Proceed to Checkout
              </button>
              <div className="text-[#737373] text-sm lg:text-base flex items-center justify-center bg-gray-50 p-3 rounded-lg">
                <i className="fa-solid fa-truck mr-2 text-[#2DC071]"></i>
                Free shipping on orders over $100
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
