"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const LoginAdmin=() => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctUsername = "Ducvip1612";
    const correctPassword = "ducvip1612";
    if (username === correctUsername && password === correctPassword) {
      router.push("/admin/dashboard");
    } else {
      setAttempts((prevAttempts) => prevAttempts + 1);
      setErrorMessage("Tài khoản hoặc mật khẩu sai. Vui lòng thử lại!");
      if (attempts >= 2) {
        setTimeout(() => {
          router.push("http://localhost:3000");
        }, 1500); 
      }
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6 text-center">Đăng nhập ADMIN </h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Tài khoản
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
