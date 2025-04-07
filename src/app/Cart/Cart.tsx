"use client"

import type React from "react"

import { useContext, useEffect, useState } from "react"
import Image from "next/image"
import { CartContext } from "@/Utilities/Context"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { auth } from "@/firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import type { User } from "firebase/auth"
import { motion, AnimatePresence } from "framer-motion"

const CartPage = () => {
  const { setCount, setCartItems, cartItems } = useContext(CartContext)
  const router = useRouter()
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState<boolean | undefined>(undefined)
  const coupon = "10OFF"

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value)
  }

  const applyCoupon = () => {
    if (couponCode.trim() === "") {
      setCouponApplied(undefined)
      return
    }
    if (couponCode === coupon && !couponApplied) {
      setCouponApplied(true)
    } else {
      setCouponApplied(false)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push(`/signIn?callbackUrl=${window.location.pathname}`)
      } else {
        setUser(currentUser)
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [router, user])

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

  const shipping = totalAmount > 2000 ? 0 : 150
  const discount = couponApplied ? totalAmount * 0.1 : 0
  const total = totalAmount  + shipping - discount

  const goToCheckout = () => {
    if (cartItems.length === 0) {
      return
    } else {
      router.push(`/Checkout?total=${total}`)
    }
  }

  // Format price with commas and 2 decimal places
  const formatPrice = (price: number) => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-[#0E3A5D] border-r-[#0E3A5D] border-b-gray-200 border-l-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading your cart...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header banner */}
      <div className="relative h-[25vh] bg-gradient-to-br from-[#0E3A5D] to-[#0A2A43] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/noise-pattern.png')",
            backgroundBlendMode: "soft-light",
            backgroundSize: "200px",
            opacity: 0.4,
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight"
          >
            Your Shopping Cart
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-white/80 max-w-2xl"
          >
            Review your items and proceed to checkout
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Products section */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Items in Your Cart ({cartItems.reduce((total, item) => total + (item.quantity || 0), 0)})
                  </h2>
                </div>

                <div className="divide-y divide-gray-100">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item._id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                      >
                        {/* Product image */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={item.imageUrl || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Product details */}
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleRemoveItem(item._id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <i className="fas fa-trash h-5 w-5"></i>
                              <span className="sr-only">Remove</span>
                            </motion.button>
                          </div>

                          <div className="flex justify-between items-center mt-3">
                            {/* Quantity selector */}
                            <div className="flex items-center">
                              <button
                                onClick={() => handleUpdateQuantity(item._id, (item.quantity || 1) - 1)}
                                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
                              >
                                <i className="fas fa-minus h-3.5 w-3.5"></i>
                                <span className="sr-only">Decrease quantity</span>
                              </button>
                              <span className="w-12 text-center font-medium">{item.quantity}</span>
                              <button
                                onClick={() => handleUpdateQuantity(item._id, (item.quantity || 1) + 1)}
                                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50"
                              >
                                <i className="fas fa-plus h-3.5 w-3.5"></i>
                                <span className="sr-only">Increase quantity</span>
                              </button>
                            </div>

                            {/* Price */}
                            <div className="font-medium text-gray-900">
                              PKR {formatPrice(item.price * (item.quantity || 1))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Features section */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: "fas fa-truck",
                    title: "Free Shipping",
                    description: "On all orders over PKR 150",
                  },
                  {
                    icon: "fas fa-credit-card",
                    title: "Secure Payments",
                    description: "Encrypted transaction data",
                  },
                  {
                    icon: "fas fa-shield-alt",
                    title: "90-Day Returns",
                    description: "Hassle-free return policy",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="flex-shrink-0 p-2 rounded-full bg-[#E6F0F9]">
                      <span className="flex items-center justify-center text-[#0E3A5D]">
                        <i className={`${feature.icon} h-6 w-6`}></i>
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-1 text-xs text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/" className="inline-block mt-6">
                <motion.button
                  whileHover={{ x: -5 }}
                  className="flex items-center text-[#0E3A5D] hover:text-[#1C4B6E] transition-colors"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Continue Shopping
                </motion.button>
              </Link>
            </div>

            {/* Order summary */}
            <div>
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm sticky top-6">
                <div className="px-6 py-5 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
                </div>

                <div className="p-6 space-y-4">
                  {/* Summary calculations */}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900 font-medium"> PKR {formatPrice(totalAmount)}</span>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <span className="text-gray-600">Shipping</span>
                      {shipping === 0 && <p className="text-xs text-gray-500 mt-0.5">Free shipping</p>}
                    </div>
                    <span className="text-gray-900 font-medium">PKR {formatPrice(shipping)}</span>
                  </div>

                  {couponApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-${formatPrice(discount)}</span>
                    </div>
                  )}

                  <div className="border-t border-gray-100 my-4 pt-4"></div>

                  {/* Order total */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-[#0E3A5D]">PKR {formatPrice(total)}</span>
                  </div>

                  {/* Coupon code section */}
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={handleCouponChange}
                        className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0E3A5D] focus:border-transparent"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={applyCoupon}
                        className={`px-4 py-2 rounded-md text-white font-medium ${
                          couponApplied && cartItems.length === 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#0E3A5D] hover:bg-[#1C4B6E]"
                        } transition duration-300`}
                      >
                        Apply
                      </motion.button>
                    </div>

                    {couponApplied !== undefined && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-md ${
                          couponApplied ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
                        }`}
                      >
                        {couponApplied ? "Coupon Applied Successfully!" : "Invalid Coupon Code"}
                      </motion.div>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={goToCheckout}
                    disabled={cartItems.length === 0}
                    className={`w-full mt-6 ${
                      cartItems.length > 0
                        ? "bg-[#0E3A5D] hover:bg-[#0A2A43] cursor-pointer"
                        : "bg-gray-300 cursor-not-allowed"
                    } text-white py-4 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-center`}
                  >
                    <i className="far fa-credit-card mr-2"></i>
                    Proceed to Checkout
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Empty cart state
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 text-gray-200">
              <i className="fas fa-shopping-cart w-full h-full"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link href="/ProductListpage">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0E3A5D] hover:bg-[#0A2A43]"
              >
                Browse Products
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage

