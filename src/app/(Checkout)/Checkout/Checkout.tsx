"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Image from "next/image";
import mastercard from "@/public/image/mastercard-icon-2048x1286-s6y46dfh.png";
import visa from "@/public/image/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png";
import payonner from "@/public/image/Payoneer-New-Logo.png";
import Paypal from "@/public/image/PayPal-Logo.png";
import unionpay from "@/public/image/unionpay-international-vector-logo.png";
import "./Checkout.css";
import { CartContext } from "@/Utilities/Context";
import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { app } from "@/firebase/config";

const Checkout: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("card");
  const { cartItems, clearCart } = useContext(CartContext);
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const firestore = getFirestore(app);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const searchParams = useSearchParams();
  const total = searchParams.get("total");

  useEffect(() => {
    if (!total) return;
    const fetchClientSecret = async () => {
      const response = await fetch("/api/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total ? parseFloat(total) * 100 : 0 }),
      });
      const data = await response.json();
      setClientSecret(data.client_secret);
    };
    fetchClientSecret();
  }, [total]);

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
        total: total ? parseFloat(total) : 0,
        items: cartItems,
        timestamp: new Date(),
        paymentStatus: paymentMethod === "card" ? "Paid" : "Pending",
      };
      await addDoc(collection(firestore, "orders"), orderData);
    } catch (error) {
      console.error("❌ Error saving order:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    await infoToDB();
    if (paymentMethod === "card") {
      if (!stripe || !elements || !clientSecret) {
        setLoading(false);
        return;
      }
      const card = elements.getElement(CardElement);
      if (!card) {
        setLoading(false);
        return;
      }
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        { payment_method: { card } }
      );
      if (error) {
        router.push("/payment-failed");
      } else if (paymentIntent?.status === "succeeded") {
        clearCart();
        router.push("/payment-success");
      }
    } else {
      // COD
      clearCart();
      router.push("/payment-success");
    }
    setLoading(false);
  };

  const Images = [mastercard, visa, payonner, Paypal, unionpay];

  return (
    <div className="max-w-[100%] mx-auto p-10 bg-white shadow-lg font-sans text-[Montserrat]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-[48%] p-6 ">
        <h2 className="text-3xl text-[#1A1A1A] font-bold mb-6 pb-3 border-b-2 border-gray-300">
          Billing Address
        </h2>

        {/* Full Name */}
        <div className="mb-5">
          <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="name"
            placeholder="Mr You"
            required
            className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@you.com"
            required
            className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone Number */}
        <div className="mb-5">
          <label htmlFor="number" className="block text-lg font-medium text-gray-700">
            Phone Number:
          </label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="+92 300 1234567"
            required
            className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        {/* Address */}
        <div className="mb-5">
          <label htmlFor="address" className="block text-lg font-medium text-gray-700">
            Address:
          </label>
          <input
            type="text"
            name="address"
            placeholder="Apartment, Street, Suite"
            id="address"
            required
            className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* City */}
        <div className="mb-5">
          <label htmlFor="city" className="block text-lg font-medium text-gray-700">
            City:
          </label>
          <input
            type="text"
            name="city"
            placeholder="Hyderabad"
            required
            id="city"
            className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        {/* State & ZIP Code */}
        <div className="flex gap-5">
          <div className="mb-5 flex-1">
            <label htmlFor="state" className="block text-lg font-medium text-gray-700">
              State:
            </label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Pakistan"
              required
              className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="mb-5 flex-1">
            <label htmlFor="zip-code" className="block text-lg font-medium text-gray-700">
              ZIP Code:
            </label>
            <input
              type="number"
              name="zip code"
              id="zip-code"
              placeholder="71000"
              required
              className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>
      </div>
          <div className="w-full lg:w-[48%] p-5 bg-white  ">
  <h2 className="text-3xl text-[#1A1A1A] font-bold mb-5 pb-2 border-b-2 border-gray-300">
    Payment
  </h2>

  {/* Payment Method Selection */}
  <div className="mb-6">
    <label className="text-lg font-medium text-gray-700">Select Payment Method:</label>
    <div className="grid grid-cols-2 gap-4 mt-3">
      
      {/* Card Payment Option */}
      <div
        className={`border p-4 rounded-lg cursor-pointer transition-all duration-300 ${
          paymentMethod === "card" ? "border-blue-500 shadow-md" : "border-gray-300"
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
              paymentMethod === "card" ? "border-blue-500 bg-blue-500" : "border-gray-400"
            }`}
          >
            {paymentMethod === "card" && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
          </span>
          <span className="ml-3 text-gray-800 font-medium">Card Payment</span>
        </label>
      </div>

      {/* Cash on Delivery Option */}
      <div
        className={`border p-4 rounded-lg cursor-pointer transition-all duration-300 ${
          paymentMethod === "cod" ? "border-green-500 shadow-md" : "border-gray-300"
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
              paymentMethod === "cod" ? "border-green-500 bg-green-500" : "border-gray-400"
            }`}
          >
            {paymentMethod === "cod" && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
          </span>
          <span className="ml-3 text-gray-800 font-medium">Cash on Delivery</span>
        </label>
      </div>
    </div>
  </div>

  {/* Card Payment Details */}
  {paymentMethod === "card" && (
    <>
      <div className="mb-5">
        <span className="text-gray-700 font-medium">Cards Accepted:</span>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 mt-3">
          {Images.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 border rounded-lg bg-gray-100 hover:shadow-md transition duration-300"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Card logo ${index + 1}`}
                className="w-12 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <label className="text-gray-700 font-medium">Card Information</label>
        <div className="border rounded-lg p-3 bg-gray-50">
          <CardElement className="w-full bg-white p-2 rounded-md" />
        </div>
      </div>
    </>
  )}

  {/* Cash on Delivery Message */}
  {paymentMethod === "cod" && (
    <div className="mb-5 p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-lg">
      You will pay for your order when it is delivered to your address.
    </div>
  )}
</div>
        </div>
        <button
          type="submit"
          className="w-full py-4 px-6 bg-[#0E3A5D] text-white text-lg font-semibold rounded-lg uppercase cursor-pointer transition duration-300 hover:opacity-90 hover:shadow-lg"
        >
          {loading ? "Processing..." : `Proceed to Checkout $${total}`}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
