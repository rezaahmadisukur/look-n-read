import GuestLayout from "@/components/layouts/guest/guestLayout";
import Navbar from "@/components/layouts/guest/Navbar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { IComic } from "@/types/index.type";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const { slug } = useParams();
    const [comic, setComic] = useState<IComic>();

    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get(`/api/comics/${slug}`);
            setComic(res.data);
        } catch (error) {
            console.error("Chapter.tsx error: ", error);
        }
    }, [slug]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    console.log(comic);

    return (
        <>
            <Navbar />
            <GuestLayout>
                <section>
                    {/* Start: Comic Image and Detail Comic */}
                    <div className="container w-full flex gap-5 items-center">
                        {/* Left: Image */}
                        <div className="w-1/6">
                            <div className="aspect-[2/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all">
                                <img
                                    src={comic?.cover_image}
                                    alt={`Comic ${comic?.title}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        {/* Right: Detail Comic */}
                        <div className="w-5/6">
                            <Table>
                                <TableBody className="text-md">
                                    <TableRow>
                                        <TableCell>Judul Komik</TableCell>
                                        <TableCell>{comic?.title}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Type</TableCell>
                                        <TableCell className="capitalize">
                                            {comic?.type}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Author</TableCell>
                                        <TableCell className="capitalize">
                                            {comic?.author}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Umur Pembaca</TableCell>
                                        <TableCell className="capitalize">
                                            Tahun (minimal)
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Status</TableCell>
                                        <TableCell className="capitalize">
                                            {comic?.status}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Cara Baca</TableCell>
                                        <TableCell>
                                            {comic?.type !== "manga"
                                                ? "Kiri ke kanan"
                                                : "Kanan ke kiri"}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Posted On</TableCell>
                                        <TableCell className="capitalize">
                                            {comic?.created_at &&
                                                new Date(
                                                    comic?.created_at
                                                ).toLocaleString("en-EN", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Updated On</TableCell>
                                        <TableCell className="capitalize">
                                            {comic?.updated_at &&
                                                new Date(
                                                    comic?.updated_at
                                                ).toLocaleString("en-EN", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    {/* End: Comic Image and Detail Comic */}

                    {/* Start: Genre  */}
                    <div className="my-10 flex gap-3">
                        <Badge className="text-md">Action</Badge>
                        <Badge className="text-md">Advanture</Badge>
                        <Badge className="text-md">Comedy</Badge>
                    </div>
                    {/* End: Genre */}

                    {/* Start: Synopis */}
                    <div>
                        <h2 className="py-5 font-semibold text-lg">
                            Synopsis: {comic?.title}
                        </h2>
                        <p>{comic?.synopsis}</p>
                    </div>
                    {/* End: Synopsis */}
                </section>
            </GuestLayout>
        </>
    );
};

export default DetailPage;
