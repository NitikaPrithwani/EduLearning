"use client";

import { useState } from "react";
import { NewsData } from "@/static-data/NewsData";
import "../assets/News.css";
import NewsCard from "./NewsCard";
import TablePagination from '@mui/material/TablePagination';
import { useSelector } from "react-redux";

export default function News() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [sortByLikes, setSortByLikes] = useState(false);

    const likesData = useSelector((state) => state.counter.likes);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const getLikes = (id) => {
        const likeItem = likesData.find(item => item.id === id);
        return likeItem ? likeItem.likesNo : 0;
    };

    const sortedNews = sortByLikes
        ? [...NewsData].sort((a, b) => getLikes(b.id) - getLikes(a.id))
        : [...NewsData].sort((a, b) => getLikes(a.id) - getLikes(b.id));

    const paginatedNews = sortedNews.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <>
            <section className="md:container md:mx-auto py-12 bg-white lg:w-4/5 lg:mx-auto">
                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-bold">News</h2>
                    <button onClick={() => setSortByLikes(!sortByLikes)} className="bg-blue-500 text-white px-3 py-1 rounded">
                        Sort by Likes {sortByLikes ? "↑" : "↓"}
                    </button>
                </div>
                <div className="flex justify-center grid md:grid-cols-3">
                    {paginatedNews.map((news, index) => (
                        <NewsCard key={index} news={news} id={news.id} />
                    ))}
                </div>
            </section>

            <TablePagination
                sx={{ margin: "auto" }}
                rowsPerPageOptions={[3, 4, 5, 6, 12, 24]}
                component="div"
                count={NewsData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleRowsPerPageChange}
                labelDisplayedRows={({ from, to, count }) =>
                    (count > rowsPerPage) ? `${from}-${to} of ${count}` : ''
                }
            />
        </>
    );
}
