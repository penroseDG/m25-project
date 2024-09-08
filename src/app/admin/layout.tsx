"use client";
import Sidebar from "@/app/admin/sidebar/page";
import Header from "@/app/admin/header/page";
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-100">
                <Header title="Admin Panel" />
                <div>{children}</div>
            </div>
        </div>
    );
};

export default AdminLayout;