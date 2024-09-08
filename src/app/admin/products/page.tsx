"use client"; // Bắt buộc phải sử dụng để có thể sử dụng useState trong Next.js

import { useState } from "react";

const ProductsPage = () => {
  const [products] = useState([
    { name: "MacBook Pro 13", price: "$2200", status: "Còn hàng", category: "Laptop" },
    { name: "iPhone 13 Pro Max", price: "$1099", status: "Hết hàng", category: "Điện thoại" },
  ]);

  return (
    <div className="pl-72 p-6 bg-gray-50 min-h-screen"> {/* Khoảng cách lề */}
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Sản phẩm</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100">
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Tên sản phẩm</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Giá</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Trạng thái</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Loại</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-b border-gray-200">{product.name}</td>
                <td className="py-4 px-6 border-b border-gray-200">{product.price}</td>
                <td className="py-4 px-6 border-b border-gray-200">{product.status}</td>
                <td className="py-4 px-6 border-b border-gray-200">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
