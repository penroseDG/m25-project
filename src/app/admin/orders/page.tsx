"use client"; // Cần để sử dụng các hook React

import { useState } from "react";

const OrdersPage = () => {
  const [orders] = useState([
    { orderId: "001", customer: "Nguyễn Văn A", price: "$3200", status: "Đã giao hàng", date: "20/02/2024" },
    { orderId: "002", customer: "Lê Thị B", price: "$1099", status: "Chờ xử lý", date: "21/02/2024" },
  ]);

  return (
    <div className="pl-72 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Đơn hàng</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100">
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Mã đơn hàng</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Khách hàng</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Giá</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Trạng thái</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Ngày đặt hàng</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-b border-gray-200">{order.orderId}</td>
                <td className="py-4 px-6 border-b border-gray-200">{order.customer}</td>
                <td className="py-4 px-6 border-b border-gray-200">{order.price}</td>
                <td className={`py-4 px-6 border-b border-gray-200 ${order.status === "Đã giao hàng" ? "text-green-600" : "text-yellow-600"}`}>
                  {order.status}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
