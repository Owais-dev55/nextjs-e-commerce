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

const Checkout: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("card");
  const { clearCart } = useContext(CartContext);

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const searchParams = useSearchParams();
  const total = searchParams.get("total");

  useEffect(() => {
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
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

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
        {
          payment_method: { card },
        }
      );

      if (error) {
        router.push("/payment-failed");
      } else if (paymentIntent?.status === "succeeded") {
        clearCart();
        router.push("/payment-success");
      }
    } else {
      // Handle COD
      router.push("/payment-success");
      clearCart();

    }

    setLoading(false);
  };

  const Images = [mastercard, visa, payonner, Paypal, unionpay];

  return (
    <div className="max-w-[100%] mx-auto p-10 bg-white shadow-lg font-sans text-[Montserrat]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-[48%] p-5">
            <h2 className="text-3xl text-[#252B42] font-bold mb-5 pb-2 border-b-2 border-gray-300">
              Billing Address
            </h2>
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
            <h2 className="text-3xl text-[#252B42] font-bold mb-5 pb-2 border-b-2 border-gray-300">
              Payment
            </h2>
            <div className="mb-5">
              <label className="label">Payment Method:</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="mr-2"
                  />
                  Card Payment
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="mr-2"
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>

            {paymentMethod === "card" && (
              <>
                <div className="mb-5">
                  <span className="label">cards accepted :</span>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
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
                  <label className="label">Card Information</label>
                  <CardElement className="checkInput" />
                </div>
              </>
            )}
            {paymentMethod === "cod" && (
              <div className="mb-5">
                <p className="text-gray-600 text-xl ">
                  You will pay for your order when it is delivered to your
                  address.
                </p>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-[#23A6F0] text-white text-lg font-semibold rounded-lg uppercase cursor-pointer transition duration-300 hover:opacity-90 hover:shadow-lg"
        >
          {loading ? "Processing..." : `Proceed to Checkout $${total}`}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
