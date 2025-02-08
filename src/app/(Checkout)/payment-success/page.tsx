"use client";
import Link from "next/link";

const PaymentSuccessPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#FAFAFA] to-[#F0F0F0] px-4 sm:px-4 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <i className="fas fa-check-circle text-[#2DC071] text-6xl"></i>
          <h2 className="text-[#252B42] text-3xl font-extrabold mt-6">
            Payment Successful!
          </h2>
          <p className="mt-4 text-sm text-[#737373]">
            Thank you for your purchase. Your order has been processed
            successfully.
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {/* <div className="rounded-md shadow">
            <Link
              href="/order-tracking"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2DC071] hover:bg-[#28a864] md:py-4 md:text-lg md:px-10 transition duration-300"
            >
              <i className="fas fa-truck mr-2"></i>
              Track Your Order
            </Link>
          </div> */}
          <div className="text-center">
            <Link
              href={"/"}
              className="font-medium text-[#23A6F0] hover:text-[#1a7ac0] transition duration-300"
            >
              <i className="fas fa-shopping-cart mr-2"></i>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
