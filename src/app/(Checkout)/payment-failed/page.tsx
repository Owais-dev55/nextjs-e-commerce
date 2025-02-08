"use client"
import Link from "next/link"

const PaymentFailedPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#F0F0F0] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <i className="fas fa-times-circle text-red-500 text-6xl"></i>
          <h2 className="mt-6 text-3xl font-extrabold text-[#252B42]">Payment Failed</h2>
          <p className="mt-2 text-sm text-[#737373]">
            We&apos;re sorry, but there was an issue processing your payment. Please try again or contact support.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow">
            <Link
              href="/Cart"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#23A6F0] hover:bg-[#1a7ac0] md:py-4 md:text-lg md:px-10 transition duration-300"
            >
              <i className="fas fa-redo mr-2"></i>
              Try Again
            </Link>
          </div>
          <div className="text-center space-y-2">
            <Link
              href="/Contact"
              className="block font-medium text-[#23A6F0] hover:text-[#1a7ac0] transition duration-300"
            >
              <i className="fas fa-headset mr-2"></i>
              Contact Support
            </Link>
            <Link href="/" className="block font-medium text-[#737373] hover:text-[#252B42] transition duration-300">
              <i className="fas fa-home mr-2"></i>
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentFailedPage

