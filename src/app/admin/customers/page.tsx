"use client"; 
import { useState } from "react";

const CustomersPage = () => {
  const [customers] = useState([
    { id: 1, name: "Nguyễn Văn A", email: "nguyenvana@gmail.com", status: "Active", role: "User", date: "20/02/2024" },
    { id: 2, name: "Lê Thị B", email: "lethib@gmail.com", status: "Inactive", role: "Admin", date: "21/02/2024" },
  ]);

  return (
    <div className="pl-72 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Khách hàng</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100">
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Tên</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Email</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Trạng thái</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Vai trò</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Ngày đăng ký</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-b border-gray-200">{customer.name}</td>
                <td className="py-4 px-6 border-b border-gray-200">{customer.email}</td>
                <td className={`py-4 px-6 border-b border-gray-200 ${customer.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                  {customer.status}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">{customer.role}</td>
                <td className="py-4 px-6 border-b border-gray-200">{customer.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersPage;
