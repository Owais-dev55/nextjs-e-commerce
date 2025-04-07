"use client"
import { useState, useEffect, useContext } from "react"
import type React from "react"
import MasterCard from '@/public/image/mastercard-icon-2048x1286-s6y46dfh.png'
import Visa from '@/public/image/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png'
import Paypal from '@/public/image/PayPal-Logo.png'
import Payoneer from '@/public/image/Payoneer-New-Logo.png'
import UnionPay from '@/public/image/unionpay-international-vector-logo.png'
import './Checkout.css';

import { useRouter, useSearchParams } from "next/navigation"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import Image from "next/image"
import { motion } from "framer-motion"
import { CartContext } from "@/Utilities/Context"
import { addDoc, collection, getFirestore } from "@firebase/firestore"
import { app } from "@/firebase/config"

const Checkout: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("card")
  const { cartItems, clearCart } = useContext(CartContext)
  const [fullName, setfullName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [formStep, setFormStep] = useState(1)

  const firestore = getFirestore(app)
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = searchParams.get("total")

  const paymentMethods = [
    { name: "Mastercard", image: MasterCard },
    { name: "Visa", image: Visa },
    { name: "Payoneer", image: Payoneer },
    { name: "PayPal", image: Paypal },
    { name: "UnionPay", image: UnionPay },
  ]

  useEffect(() => {
    if (!total) return
    const fetchClientSecret = async () => {
      const response = await fetch("/api/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total ? Number.parseFloat(total) * 100 : 0 }),
      })
      const data = await response.json()
      setClientSecret(data.client_secret)
    }
    fetchClientSecret()
  }, [total])

  const infoToDB = async () => {
    try {
      const orderData = {
        fullName,
        email,
        number,
        address,
        city,
        state,
        zipCode,
        paymentMethod,
        total: total ? Number.parseFloat(total) : 0,
        items: cartItems,
        timestamp: new Date(),
        paymentStatus: paymentMethod === "card" ? "Paid" : "Pending",
      }
  
      const docRef = await addDoc(collection(firestore, "orders"), orderData)
      console.log("✅ Order saved with ID:", docRef.id)
    } catch (error) {
      console.error("❌ Error saving order:", error)
      alert("Error saving order. Check the console for details.")
    }
  }
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    await infoToDB()
    if (paymentMethod === "card") {
      if (!stripe || !elements || !clientSecret) {
        setLoading(false)
        return
      }
      const card = elements.getElement(CardElement)
      if (!card) {
        setLoading(false)
        return
      }
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, { payment_method: { card } })
      if (error) {
        router.push("/payment-failed")
      } else if (paymentIntent?.status === "succeeded") {
        clearCart()
        router.push("/payment-success")
      }
    } else {
      // COD
      clearCart()
      router.push("/payment-success")
    }
    setLoading(false)
  }

  const nextStep = () => {
    setFormStep(2)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setFormStep(1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#F5F7FA]">
      {/* Header banner */}
      <div className="relative h-[20vh] bg-gradient-to-br from-[#0E3A5D] to-[#0A2A43] overflow-hidden">
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
            className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight"
          >
            Checkout
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center text-white/80"
          >
            <span className={formStep === 1 ? "text-white font-medium" : "text-white/70"}>Billing Information</span>
            <i className="fas fa-chevron-right mx-3 text-xs text-white/50"></i>
            <span className={formStep === 2 ? "text-white font-medium" : "text-white/70"}>Payment</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl overflow-hidden">
          {formStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-10"
            >
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-[#0E3A5D] text-white flex items-center justify-center font-semibold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Billing Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    placeholder="Mr You"
                    required
                    className="input-checkout"
                    value={fullName}
                    onChange={(e) => setfullName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="input-checkout"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    placeholder="+92 (555) 00000"
                    required
                    className="input-checkout"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="123 Main Street, Apt 4B"
                    id="address"
                    required
                    className="input-checkout"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Hyderabad"
                    required
                    id="city"
                    className="input-checkout"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                {/* State */}
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Sindh "
                    required
                    className="input-checkout"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>

                {/* ZIP Code */}
                <div>
                  <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP / Postal Code
                  </label>
                  <input
                    type="text"
                    name="zip code"
                    id="zip-code"
                    placeholder="94103"
                    required
                    className="input-checkout"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-3 bg-[#0E3A5D] text-white font-medium rounded-lg flex items-center"
                >
                  Continue to Payment
                  <i className="fas fa-arrow-right ml-2"></i>
                </motion.button>
              </div>
            </motion.div>
          )}

          {formStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-10"
            >
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-[#0E3A5D] text-white flex items-center justify-center font-semibold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* Payment Method Selection */}
                  <div className="mb-8">
                    <p className="text-sm font-medium text-gray-700 mb-3">Select Payment Method</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Card Payment Option */}
                      <div
                        className={`border p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                          paymentMethod === "card"
                            ? "border-[#0E3A5D] bg-blue-50 shadow-md"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={() => setPaymentMethod("card")}
                            className="hidden"
                          />
                          <span
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              paymentMethod === "card" ? "border-[#0E3A5D] bg-[#0E3A5D]" : "border-gray-400"
                            }`}
                          >
                            {paymentMethod === "card" && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
                          </span>
                          <div className="ml-3">
                            <span className="text-gray-800 font-medium block">Credit / Debit Card</span>
                            <span className="text-xs text-gray-500">Pay securely with your card</span>
                          </div>
                        </label>
                      </div>

                      {/* Cash on Delivery Option */}
                      <div
                        className={`border p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                          paymentMethod === "cod"
                            ? "border-[#0E3A5D] bg-blue-50 shadow-md"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        onClick={() => setPaymentMethod("cod")}
                      >
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={paymentMethod === "cod"}
                            onChange={() => setPaymentMethod("cod")}
                            className="hidden"
                          />
                          <span
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              paymentMethod === "cod" ? "border-[#0E3A5D] bg-[#0E3A5D]" : "border-gray-400"
                            }`}
                          >
                            {paymentMethod === "cod" && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
                          </span>
                          <div className="ml-3">
                            <span className="text-gray-800 font-medium block">Cash on Delivery</span>
                            <span className="text-xs text-gray-500">Pay when you receive your order</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Card Payment Details */}
                  {paymentMethod === "card" && (
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-3">Accepted Cards</p>
                        <div className="flex flex-wrap gap-3">
                          {paymentMethods.map((method, index) => (
                            <div
                              key={index}
                              className="p-2 border rounded-md bg-gray-50 hover:shadow-sm transition-all"
                            >
                              <Image
                                src={method.image || "/placeholder.svg"}
                                alt={method.name}
                                width={60}
                                height={40}
                                className="object-contain h-8"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-3">Card Information</p>
                        <div className="border rounded-lg p-4 bg-white shadow-sm">
                          <CardElement
                            options={{
                              style: {
                                base: {
                                  fontSize: "16px",
                                  color: "#424770",
                                  "::placeholder": {
                                    color: "#aab7c4",
                                  },
                                },
                                invalid: {
                                  color: "#9e2146",
                                },
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cash on Delivery Message */}
                  {paymentMethod === "cod" && (
                    <div className="mt-6 p-5 border border-gray-200 rounded-lg bg-gray-50">
                      <div className="flex items-start">
                        <i className="fas fa-info-circle text-[#0E3A5D] mt-1 mr-3 text-lg"></i>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Cash on Delivery</h4>
                          <p className="text-gray-600 text-sm">
                            You will pay for your order when it is delivered to your address. Please ensure someone is
                            available to receive the package and make the payment.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>

                  <div className="space-y-3 mb-6">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <div className="flex items-center">
                          <span className="font-medium">{item.quantity}x</span>
                          <span className="ml-2 truncate max-w-[200px]">{item.title}</span>
                        </div>
                        <span className="font-medium">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${Number.parseFloat(total || "0").toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">Calculated at next step</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-[#0E3A5D]">${Number.parseFloat(total || "0").toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-blue-800">
                    <div className="flex">
                      <i className="fas fa-shield-alt mr-2 mt-0.5"></i>
                      <div>
                        Your personal data will be used to process your order, support your experience, and for other
                        purposes described in our privacy policy.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-between">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg flex items-center hover:bg-gray-50"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back to Billing
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-[#0E3A5D] text-white font-medium rounded-lg flex items-center disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Order
                      <i className="fas fa-check ml-2"></i>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Checkout

