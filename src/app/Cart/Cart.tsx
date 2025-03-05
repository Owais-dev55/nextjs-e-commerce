"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { CartContext } from "@/Utilities/Context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";

const CartPage = () => {
  const { setCount, setCartItems, cartItems } = useContext(CartContext);
  const router = useRouter();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState<boolean | undefined>(
    undefined
  );
  const coupon = "10OFF";

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push(`/Login?callbackUrl=${window.location.pathname}`);
      } else {
        setUser(currentUser);
        console.log(user);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 0),
      0
    );
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

  const goToCheckout = () => {
    if (cartItems.length === 0) {
      return;
    } else {
      router.push(`/Checkout?total=${total}`);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#F0F0F0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-8 lg:mb-12 flex items-center">
          <i className="fa-solid fa-cart-shopping mr-3 text-[#0E3A5D]"></i>
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
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border border-gray-200 bg-white shadow-md rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              >
                {/* Product Image */}
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  width={130}
                  height={130}
                  className="w-28 h-28 lg:w-36 lg:h-36 object-cover rounded-xl border border-gray-300"
                />
              
                {/* Product Details */}
                <div className="flex-grow">
                  <p className="font-semibold text-lg lg:text-xl text-[#252B42] tracking-wide">
                    {item.title}
                  </p>
                  <p className="text-md text-[#737373] mt-1 font-medium">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              
                {/* Quantity and Total */}
                <div className="flex items-center gap-6 mt-2 sm:mt-0">
                  <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm">
                    <button
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-all text-lg font-bold text-[#252B42] rounded-l-full"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity! - 1)}
                    >
                      -
                    </button>
                    <p className="px-5 py-2 bg-white text-lg font-semibold text-[#252B42]">
                      {item.quantity}
                    </p>
                    <button
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-all text-lg font-bold text-[#252B42] rounded-r-full"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity! + 1)}
                    >
                      +
                    </button>
                  </div>
              
                  <p className="text-lg lg:text-xl font-semibold text-[#252B42]">
                    Total: ${(item.price * item.quantity!).toFixed(2)}
                  </p>
              
                  {/* Remove Button */}
                  <button
                    className="border border-gray-300 text-[#737373] px-3 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all shadow-sm"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
              

              ))
            )}
            <Link href={"/"} className="inline-block">
              <button className="flex items-center text-[#0E3A5D] hover:text-[#1C4B6E] hover:opacity-70 transition-colors duration-200 mt-4 text-sm lg:text-base font-medium">
                <i className="fa-solid fa-chevron-left mr-2"></i>
                Continue Shopping
              </button>
            </Link>
          </div>

          <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg sticky top-8">
              <h2 className="text-xl lg:text-2xl font-semibold text-[#1A1A1A] mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-[#4A4A4A] text-sm lg:text-base">
                    Subtotal
                  </span>
                  <span className="text-[#1A1A1A] font-semibold text-base lg:text-lg">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#4A4A4A] text-sm lg:text-base">
                    Tax
                  </span>
                  <span className="text-[#1A1A1A] font-semibold text-base lg:text-lg">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#4A4A4A] text-sm lg:text-base">
                    Shipping
                  </span>
                  <span className="text-[#1A1A1A] font-semibold text-base lg:text-lg">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between items-center">
                    <span className="text-[#4A4A4A] text-sm lg:text-base">
                      Discount (10%)
                    </span>
                    <span className="text-[#0E3A5D] font-semibold text-base lg:text-lg">
                      -${discount.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200 my-6"></div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg lg:text-xl font-semibold text-[#1A1A1A]">
                  Total
                </span>
                <span className="text-lg lg:text-xl font-bold text-[#0E3A5D]">
                  ${total.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={handleCouponChange}
                  className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0E3A5D] focus:border-transparent"
                />
                <button
                  onClick={applyCoupon}
                  className={`px-4 py-2 rounded-md text-white font-semibold ${
                    couponApplied && cartItems.length === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#0E3A5D] hover:bg-[#1C4B6E]"
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
                className={`${cartItems.length > 0 ? "bg-[#0E3A5D]" : "bg-[#0E3A5D] opacity-25 cursor-not-allowed"} w-full  text-white py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-[#1C4B6E] transition duration-300 mb-6 flex items-center justify-center shadow-md hover:shadow-lg`}
              >
                <i className="fa-regular fa-credit-card mr-2"></i>
                Proceed to Checkout
              </button>
              <div className="text-[#4A4A4A] text-sm lg:text-base flex items-center justify-center bg-gray-50 p-3 rounded-lg">
                <i className="fa-solid fa-truck mr-2 text-[#0E3A5D]"></i>
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
