import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* Header */}
            <nav className="bg-black/40 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link to={"/"}>
                                <h1 className="text-2xl font-bold text-white">
                                    Look 'N Read
                                </h1>
                            </Link>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                                Latest
                            </button>
                            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                                Popular
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
