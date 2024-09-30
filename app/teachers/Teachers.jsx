"use client"

import { useState } from "react";
import { TeachersData } from "../../static-data/TeachersData";
import TeachersCard from "./TeachersCard";
import "../assets/Teachers.css";
import Link from "next/link";
import { TablePagination } from "@mui/material";

export default function AllTeachers() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedTeachers = TeachersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <>
            <div className="md:container md:mx-auto md:w-4/5 courseGrid w-5/5 mx-auto">
                {paginatedTeachers.map((teacher, index) => (
                    <TeachersCard
                        key={index}
                        teachers={teacher}
                    />
                ))}
            </div>
            <TablePagination
                sx={{ margin: "auto" }}
                rowsPerPageOptions={[3, 4, 5, 6, 12, 24]}
                component="div"
                count={TeachersData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                labelDisplayedRows={({ from, to, count }) =>
                    (count > rowsPerPage) ? `${from}-${to} of ${count}` : ''
                }
            />
            <div className="mb-12 grid justify-items-center">
                <Link href="/becomeAteacher">
                    <button className="buttonBgImg shadow-xl shadow-current">Apply for <br /> Become A Teacher</button>
                </Link>
            </div>
        </>
    );
}
