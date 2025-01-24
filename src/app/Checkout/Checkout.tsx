"use client"
import type React from "react"
import mastercard from "@/public/image/mastercard-icon-2048x1286-s6y46dfh.png"
import visa from "@/public/image/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png"
import payonner from "@/public/image/Payoneer-New-Logo.png"
import Paypal from "@/public/image/PayPal-Logo.png"
import unionpay from "@/public/image/unionpay-international-vector-logo.png"
import Image from "next/image"
import './Checkout.css'

const Checkout: React.FC = () => {
  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Order placed successfully")
  }

  return (
    <div className="max-w-[100%] mx-auto p-10 bg-white shadow-lg font-sans text-[Montserrat]">
      <form onSubmit={onsubmit}>
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-[48%] p-5">
            <h2 className="text-3xl text-[#252B42] font-bold mb-5 pb-2 border-b-2 border-gray-300">Billing Address</h2>
            <div className="mb-5">
              <label htmlFor="fullName" className="label">
                full name:
              </label>
              <input
                type="text"
                id="fullName"
                name="name"
                placeholder="Mr You"
                required
                className="checkInput"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="label">
                email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@you.com"
                required
                className="checkInput"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="address" className="label">
                address :
              </label>
              <input
                type="text"
                name="address"
                placeholder="Apartment-Street-suit"
                id="address"
                required
                className="checkInput"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="city" className="label">
                city :
              </label>
              <input
                type="text"
                name="city"
                placeholder="Hyderabad"
                required
                id="city"
                className="checkInput"
              />
            </div>
            <div className="flex gap-5">
              <div className="mb-5 flex-1">
                <label htmlFor="state" className="label">
                  state :
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Pakistan"
                  required
                  className="checkInput"
                />
              </div>
              <div className="mb-5 flex-1">
                <label htmlFor="zip-code" className="label">
                  zip code :
                </label>
                <input
                  type="number"
                  name="zip code"
                  id="zip-code"
                  placeholder="71000"
                  required
                  className="checkInput"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[48%] p-5">
            <h2 className="text-3xl text-[#252B42] font-bold mb-5 pb-2 border-b-2 border-gray-300">Payment</h2>
            <div className="mb-5">
              <span className="label">cards accepted :</span>
              <div className="flex gap-3 mt-2">
                <Image
                  src={mastercard }
                  alt="Mastercard"
                  className="w-16 h-auto transition-transform duration-300 hover:scale-110"
                />
                <Image
                  src={visa }
                  alt="Visa"
                  className="w-16 h-auto transition-transform duration-300 hover:scale-110"
                />
                <Image
                  src={Paypal }
                  alt="PayPal"
                  className="w-16 h-auto transition-transform duration-300 hover:scale-110"
                />
                <Image
                  src={payonner }
                  alt="Payoneer"
                  className="w-16 h-auto transition-transform duration-300 hover:scale-110"
                />
                <Image
                  src={unionpay }
                  alt="UnionPay"
                  className="w-16 h-auto transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="name-on-card" className="label">
                name on card:
              </label>
              <input
                type="text"
                name="name-on-card"
                id="name-on-card"
                placeholder="Mr You"
                required
                className="checkInput"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="ccn" className="label">
                credit card number :
              </label>
              <input
                type="number"
                name="ccn"
                placeholder="0000-1111-2222-3333"
                id="ccn"
                required
                className="checkInput"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="em" className="label">
                expiry month :
              </label>
              <input
                type="date"
                name="expiry-month"
                id="em"
                required
                className="checkInput"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="cvc" className="label">
                CVC :
              </label>
              <input
                type="number"
                name="CVC"
                id="cvc"
                placeholder="123"
                required
                className="checkInput"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-[#23A6F0] text-white text-lg font-semibold rounded-lg uppercase cursor-pointer transition duration-300 hover:opacity-90 hover:shadow-lg"
        >
          proceed to checkout
        </button>
      </form>
    </div>
  )
}

export default Checkout

