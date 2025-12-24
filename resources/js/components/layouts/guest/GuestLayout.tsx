import { IChildren } from "@/types/index.type";
import Snowfall from "react-snowfall";

const GuestLayout = ({ children }: IChildren) => {
    return (
        <div className="min-h-screen dark:bg-slate-950 dark:text-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </div>
            <Snowfall
                snowflakeCount={500}
                speed={[0, 1]}
                wind={[-1, 0]}
                color="#00bcd4"
                style={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    zIndex: "revert",
                }}
            />
        </div>
    );
};

export default GuestLayout;
