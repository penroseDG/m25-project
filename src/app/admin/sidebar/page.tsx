import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 bg-gray-900 text-gray-300 w-64 p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white mb-8">PenroseDG-DucVIP</h1>
        <ul>
          <li className="mb-6">
            <a href="/admin/dashboard" className="hover:text-white block">Bảng điều khiển</a>
          </li>
          <li className="mb-6">
            <a href="/admin/products" className="hover:text-white block">Các sản phẩm</a>
          </li>
          <li className="mb-6">
            <a href="/admin/orders" className="hover:text-white block">Đơn hàng</a>
          </li>
          <li className="mb-6">
            <a href="/admin/customers" className="hover:text-white block">Khách hàng</a>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 p-6">
        <ul>
          <li className="mb-4">
            <a href="/admin/help" className="hover:text-white block">Giúp đỡ</a>
          </li>
          <li className="mb-4">
            <a href="/admin/contact" className="hover:text-white block">Liên hệ với chúng tôi</a>
          </li>
          <li className="mb-4 flex items-center">
            <FaSignOutAlt className="mr-2" />
            <a href="/logout" className="hover:text-white">Đăng xuất</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
