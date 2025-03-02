"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "@/firebase/config";
import Image from "next/image";

const AdminOrders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  const firestore = getFirestore(app);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(firestore, "orders");
        const orderSnapshot = await getDocs(ordersCollection);
        const ordersList = orderSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
      } catch (error) {
        console.error("❌ Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛍️ Customer Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Customer</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Total</th>
              <th className="border p-2">Payment</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="border p-2">{order.fullName}</td>
                <td className="border p-2">{order.email}</td>
                <td className="border p-2">${order.total.toFixed(2)}</td>
                <td className="border p-2">{order.paymentMethod.toUpperCase()}</td>
                <td className="border p-2">
                  {order.paymentStatus === "Paid" ? (
                    <span className="text-green-600 font-semibold">Paid</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Pending</span>
                  )}
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-2/3 max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Order Details</h3>
            <p><strong>Customer:</strong> {selectedOrder.fullName}</p>
            <p><strong>Email:</strong> {selectedOrder.email}</p>
            <p><strong>Phone:</strong> {selectedOrder.number}</p>
            <p><strong>Address:</strong> {selectedOrder.address}, {selectedOrder.city}, {selectedOrder.state}, {selectedOrder.zipCode}</p>
            <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod.toUpperCase()}</p>
            <p><strong>Total:</strong> ${selectedOrder.total.toFixed(2)}</p>
            <p><strong>Status:</strong> {selectedOrder.paymentStatus}</p>

            <h4 className="text-lg font-semibold mt-4">🛒 Ordered Items</h4>
            <ul className="border-t mt-2 pt-2">
  {selectedOrder.items.map((item: any, index: number) => (
    <li key={index} className="flex items-center gap-4 border-b p-2">
      <Image src={item.imageUrl} alt={item.name} width={50} height={50} className="rounded-md" />
      <div>
        <strong>{item.title}</strong>  
        <p>ID: {item._id}</p>
        <p>${item.price} × {item.quantity}</p>
      </div>
    </li>
  ))}
</ul>


            <button
              onClick={() => setSelectedOrder(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
