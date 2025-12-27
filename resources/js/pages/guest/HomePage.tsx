import GuestLayout from "@/components/layouts/guest/GuestLayout";
import { IComicChapter, IGenre } from "@/types/index.type";
import axios from "axios";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/layouts/guest/Navbar";
import CardComic from "@/components/guest-comp/CardComic";
import Footer from "@/components/layouts/guest/Footer";

export default function HomePage() {
    const [comics, setComics] = useState<IComicChapter[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(
        null
    );
    const [categoryComics, setCategoryComics] = useState<IComicChapter[]>([]);
    const [isCategoryLoading, setIsCategoryLoading] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();

    // Ambil value search dari URL (kalau ada)
    const currentQuery = searchParams.get("search") || "";

    useEffect(() => {
        document.title = "Homepage";
    }, []);

    const fetchComics = useCallback(async () => {
        setIsLoading(true);
        try {
            // Cek: Apakah di URL ada ?search=...
            if (currentQuery) {
                const res = await axios.get(
                    `/api/comics?search=${currentQuery}`
                );
                setComics(res.data.data);
            } else {
                // Kalau gak ada, ambil semua
                const res = await axios.get("/api/comics");
                setComics(res.data.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [currentQuery]);

    useEffect(() => {
        fetchComics();
    }, [fetchComics]);

    // --- TAMBAHKAN FUNGSI INI: HANDLE SEARCH ---
    const handleSearch = (query: string) => {
        if (!query || query.trim() === "") {
            setSearchParams({}); // Hapus query params kalau kosong
        } else {
            setSearchParams({ search: query }); // Ubah URL jadi ?search=query
        }
    };

    const handleCategoryClick = async (categoryName: string) => {
        try {
            setExpandedCategory(categoryName);
            setIsCategoryLoading(true);

            const res = await axios.get(
                `/api/comics?type=${categoryName.toLowerCase()}`
            );
            const categoryData = res.data.data || res.data || [];
            setCategoryComics(Array.isArray(categoryData) ? categoryData : []);
        } catch (error) {
            console.error("Error fetching category comics:", error);
            setCategoryComics([]);
        } finally {
            setTimeout(() => {
                setIsCategoryLoading(false);
            }, 3000);
        }
    };

    const closeModal = () => {
        setExpandedCategory(null);
        setCategoryComics([]);
    };

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };

        if (expandedCategory) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [expandedCategory]);

    console.log("genres", comics);

    return (
        <>
            <Navbar
                onCategoryClick={handleCategoryClick}
                onSearchSubmit={handleSearch}
            />
            {/* Main Content */}
            <GuestLayout>
                {/* Latest Updates */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Latest Updates
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {comics.length > 0 ? (
                            comics
                                .filter((comic) => comic && comic.id)
                                .map((comic) => (
                                    <Fragment key={comic.id}>
                                        <CardComic
                                            comic={comic}
                                            isLoading={isLoading}
                                        />
                                    </Fragment>
                                ))
                        ) : (
                            <div className="col-span-4">
                                <p className="text-destructive font-bold text-5xl">
                                    Comic Not Found 😱
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Manga Terbaru */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Manga Terbaru
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        Manga Terbaru Content
                    </div>
                </div>

                {/* Manhua Terbaru */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Manhua Terbaru
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        Manhua Terbaru Content
                    </div>
                </div>

                {/* Manhwa Terbaru */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Manhwa Terbaru
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        Manhwa Terbaru Content
                    </div>
                </div>

                {/* Genre Terbaru */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Genre
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        Genre Content
                    </div>
                </div>
            </GuestLayout>

            {/* Modal Overlay for Expanded Category */}
            {expandedCategory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop with blur effect */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeModal}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative z-10 w-full max-w-7xl mx-4 max-h-[90vh] bg-slate-900/95 rounded-2xl border border-purple-500/30 shadow-2xl">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
                            <h2 className="text-3xl font-bold text-white">
                                {expandedCategory} Comics
                            </h2>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-purple-500/20 rounded-full transition-colors"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-300 hover:text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"></div>
                            {categoryComics.length > 0 ? (
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                    {categoryComics
                                        .filter((comic) => comic && comic.id)
                                        .map((comic) => (
                                            <Fragment key={comic.id}>
                                                <CardComic
                                                    comic={comic}
                                                    isLoading={
                                                        isCategoryLoading
                                                    }
                                                />
                                            </Fragment>
                                        ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="text-6xl mb-4">📚</div>
                                    <h3 className="text-xl font-semibold text-gray-300 mb-2">
                                        No {expandedCategory?.toLowerCase()}{" "}
                                        found
                                    </h3>
                                    <p className="text-gray-400">
                                        Try checking back later for new
                                        additions!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
