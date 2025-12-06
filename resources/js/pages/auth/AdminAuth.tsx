import { AdminFormLogin } from "@/components/auth/LoginForm";
import { Divide } from "lucide-react";

const AdminAuth = () => {
    return (
        <div className="grid place-content-center  min-h-screen">
            <div className="w-full max-w-md">
                <AdminFormLogin />
            </div>
        </div>
    );
};

export default AdminAuth;
