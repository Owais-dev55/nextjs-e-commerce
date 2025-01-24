'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import { CartContext } from '@/Utilities/Context';
import Link from 'next/link';

const CartPage = () => {
  const { setCount, setCartItems, cartItems } = useContext(CartContext);

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 0)), 0);
  };

  const handleRemoveItem = (itemId: string) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem._id !== itemId);
    setCartItems(updatedCartItems);
    updateCartCount(updatedCartItems);
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem._id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCartItems(updatedCartItems);
    updateCartCount(updatedCartItems);
  };

  const updateCartCount = (items: typeof cartItems) => {
    const newCount = items.reduce((total, item) => total + (item.quantity || 0), 0);
    setCount(newCount);
  };

  const totalAmount = calculateTotalAmount();
  const tax = totalAmount * 0.1; 
  const shipping = totalAmount > 100 ? 0 : 50; 
  const total = totalAmount + tax + shipping;

  return (
    <section>
      <div className="min-h-screen bg-[#FAFAFA] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[#252B42] mb-8 flex items-center">
            <i className="fa-solid fa-cart-shopping mr-2"></i>
            Your Cart
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items Section */}
            <div className="lg:w-2/3">
              {cartItems.map((item) => (
                <div key={item._id} className="cartitems-format cartitems-format-main flex items-center gap-4 border-b pb-4 mb-4">
                  <Image src={item.imageUrl} alt={item.title} width={100} height={100} />
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <div className="quantity-controls flex items-center">
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity! - 1)}
                    >
                      -
                    </button>
                    <p className="quan px-2">{item.quantity}</p>
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity! + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p>Total: ${(item.price * item.quantity!).toFixed(2)}</p>
                  <i
                    className="fa-solid fa-trash cursor-pointer text-red-500"
                    onClick={() => handleRemoveItem(item._id)}
                  ></i>
                </div>
              ))}
              <Link href={'/'} >
              <button className="flex items-center text-[#2DC071] hover:text-[#28a864] transition-colors duration-200 mt-4">
                <i className="fa-solid fa-chevron-left"></i>
                Continue Shopping
              </button>
              </Link>
            </div>

            {/* Order Summary Section */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-[#252B42] mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-[#737373]">Subtotal</span>
                    <span className="text-[#252B42] font-semibold">${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#737373]">Tax</span>
                    <span className="text-[#252B42] font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#737373]">Shipping</span>
                    <span className="text-[#252B42] font-semibold">${shipping.toFixed(2)}</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 my-4"></div>
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-semibold text-[#252B42]">Total</span>
                  <span className="text-lg font-semibold text-[#252B42]">${total.toFixed(2)}</span>
                </div>
                <Link href={'/Checkout'}>
                <button className="w-full bg-[#2DC071] text-white py-3 rounded-full font-semibold hover:bg-[#28a864] transition duration-300 mb-4 flex items-center justify-center">
                  <i className="fa-regular fa-credit-card mr-2"></i>
                  Proceed to Checkout
                </button>
                </Link>
                <div className="text-[#737373] text-sm flex items-center justify-center">
                  <i className="fa-solid fa-truck mr-2"></i>
                  Free shipping on orders over $100
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
