"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const LogoutAdmin = () => {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("adminToken"); 
    router.push("https://localhost:3000");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">Đang đăng xuất...</h1>
    </div>
  );
};
export default LogoutAdmin;
