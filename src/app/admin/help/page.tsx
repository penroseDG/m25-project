"use client";
import { FaQuestionCircle } from "react-icons/fa";  
const HelpPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Trợ giúp</h1>
      <p className="mb-4">
        Chúng tôi ở đây để giúp bạn! Vui lòng đọc các câu hỏi thường gặp hoặc liên hệ với chúng tôi.
      </p>
      <div>
        <FaQuestionCircle className="text-gray-500 inline mr-2" />
        <span className="text-xl font-semibold">Câu hỏi thường gặp</span>
        <ul className="list-disc list-inside mt-4 space-y-3">
          <li>
            <span className="font-semibold">Làm thế nào để thay đổi mật khẩu?</span>
            <p>Đi tới trang cài đặt tài khoản và chọn tùy chọn "Thay đổi mật khẩu".</p>
          </li>
          <li>
            <span className="font-semibold">Làm thế nào để liên hệ với bộ phận hỗ trợ?</span>
            <p>Vui lòng sử dụng mẫu liên hệ trên trang "Liên hệ" hoặc gửi email đến support@hocvienrikkei.com.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HelpPage;
