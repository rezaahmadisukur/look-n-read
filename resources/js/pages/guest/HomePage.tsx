import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Header */}
            <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-white">
                                Look 'N Read
                            </h1>
                        </div>
                        <div>
                            <Link
                                to="/admin/login"
                                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                            >
                                Admin Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Welcome to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Look 'N Read
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Platform membaca komik digital modern. Temukan ribuan
                        komik dari berbagai genre.
                    </p>

                    {/* Coming Soon Badge */}
                    <div className="inline-block mb-8">
                        <span className="px-6 py-3 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold border border-yellow-500/30">
                            🚀 Coming Soon
                        </span>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Koleksi Lengkap
                            </h3>
                            <p className="text-gray-400">
                                Ribuan judul komik dari berbagai genre tersedia
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Kualitas Tinggi
                            </h3>
                            <p className="text-gray-400">
                                Baca komik dengan kualitas gambar terbaik
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Responsive Design
                            </h3>
                            <p className="text-gray-400">
                                Baca di mana saja, dari desktop hingga mobile
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full py-6 text-center text-gray-400">
                <p>
                    &copy; 2025 Look 'N Read. Built with Laravel + React +
                    TypeScript
                </p>
            </footer>
        </div>
    );
}
