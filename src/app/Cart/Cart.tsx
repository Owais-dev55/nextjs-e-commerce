"use client"
import React, { useContext } from "react"
import Image from "next/image"
import { CartContext } from "@/Utilities/Context"
import Link from "next/link"

const CartPage = () => {
  const { setCount, setCartItems, cartItems } = useContext(CartContext)

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 0), 0)
  }

  const handleRemoveItem = (itemId: string) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem._id !== itemId)
    setCartItems(updatedCartItems)
    updateCartCount(updatedCartItems)
  }

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId)
      return
    }
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem._id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem,
    )
    setCartItems(updatedCartItems)
    updateCartCount(updatedCartItems)
  }

  const updateCartCount = (items: typeof cartItems) => {
    const newCount = items.reduce((total, item) => total + (item.quantity || 0), 0)
    setCount(newCount)
  }

  const totalAmount = calculateTotalAmount()
  const tax = totalAmount * 0.1
  const shipping = totalAmount > 100 ? 0 : 50
  const total = totalAmount + tax + shipping

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#F0F0F0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252B42] mb-8 lg:mb-12 flex items-center">
          <i className="fa-solid fa-cart-shopping mr-3 text-[#2DC071]"></i>
          Your Shopping Cart
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Cart Items Section */}
          <div className="lg:w-2/3 w-full bg-white rounded-lg shadow-lg p-6">
            {cartItems.map((item) => (
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
                  <p className="font-semibold text-sm sm:text-base lg:text-lg text-[#252B42]">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                  <div className="quantity-controls flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <button
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity! - 1)}
                    >
                      -
                    </button>
                    <p className="quan px-3 py-1 bg-white">{item.quantity}</p>
                    <button
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity! + 1)}
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
            ))}
            <Link href={"/"} className="inline-block">
              <button className="flex items-center text-[#2DC071] hover:text-[#28a864] transition-colors duration-200 mt-4 text-sm lg:text-base font-medium">
                <i className="fa-solid fa-chevron-left mr-2"></i>
                Continue Shopping
              </button>
            </Link>
          </div>

          {/* Order Summary Section */}
          <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg sticky top-8">
              <h2 className="text-xl lg:text-2xl font-semibold text-[#252B42] mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-[#737373] text-sm lg:text-base">Subtotal</span>
                  <span className="text-[#252B42] font-semibold text-base lg:text-lg">${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#737373] text-sm lg:text-base">Tax</span>
                  <span className="text-[#252B42] font-semibold text-base lg:text-lg">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#737373] text-sm lg:text-base">Shipping</span>
                  <span className="text-[#252B42] font-semibold text-base lg:text-lg">${shipping.toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t border-gray-200 my-6"></div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg lg:text-xl font-semibold text-[#252B42]">Total</span>
                <span className="text-lg lg:text-xl font-bold text-[#2DC071]">${total.toFixed(2)}</span>
              </div>
              <Link href={"/Checkout"} className="block">
                <button className="w-full bg-[#2DC071] text-white py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-[#28a864] transition duration-300 mb-6 flex items-center justify-center shadow-md hover:shadow-lg">
                  <i className="fa-regular fa-credit-card mr-2"></i>
                  Proceed to Checkout
                </button>
              </Link>
              <div className="text-[#737373] text-sm lg:text-base flex items-center justify-center bg-gray-50 p-3 rounded-lg">
                <i className="fa-solid fa-truck mr-2 text-[#2DC071]"></i>
                Free shipping on orders over $100
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage

