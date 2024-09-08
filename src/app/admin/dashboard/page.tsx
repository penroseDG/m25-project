"use client";

import { Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement
);
const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Doanh thu theo thời gian" },
  },
  scales: { y: { beginAtZero: true } },
};

const doughnutData = {
  labels: ["Electronics", "Laptops", "Phones"],
  datasets: [
    {
      data: [6200, 2100, 3400],
      backgroundColor: ["#4B5563", "#9CA3AF", "#D1D5DB"],
      hoverBackgroundColor: ["#374151", "#6B7280", "#9CA3AF"],
    },
  ],
};
const lineData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Revenue",
      data: [1200, 1900, 3000, 5000, 2400, 3600],
      borderColor: "#4A5568",
      backgroundColor: "rgba(74, 85, 104, 0.2)",
      borderWidth: 2,
    },
  ],
};
const DashboardPage = () => {
  return (
    <div className="ml-64 pt-16 p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-6">Bảng điều khiển</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-sm md:text-lg">Tổng doanh thu</h3>
          <p className="text-lg md:text-xl font-bold">$9,328.55</p>
          <span className="text-green-500">+15.6% so với tuần trước</span>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-sm md:text-lg">Lượt truy cập</h3>
          <p className="text-lg md:text-xl font-bold">12,302</p>
          <span className="text-green-500">+12.7% so với tuần trước</span>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-sm md:text-lg">Đơn hàng</h3>
          <p className="text-lg md:text-xl font-bold">963</p>
          <span className="text-red-500">-12.7%</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 h-64">
          <div className="p-4 bg-white rounded shadow h-full">
            <h3 className="text-sm md:text-lg mb-4">Hiệu suất bán hàng</h3>
            <Line data={lineData} options={lineOptions as any } />
          </div>
        </div>
        <div className="p-4 bg-white rounded shadow h-full flex justify-center items-center">
          <div className="w-48 md:w-56">
            <h3 className="text-sm md:text-lg mb-4">Top Categories</h3>
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
