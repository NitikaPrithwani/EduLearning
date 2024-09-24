"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "@/static-data/Nav";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const pathname = usePathname();
    useEffect(() => {
        setActiveLink(pathname);
    }, [pathname]);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded={isOpen}
            >
                <span className="sr-only">Open main menu</span>
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
            <div
                className={`w-full md:container md:flex md:w-auto ${isOpen ? "block" : "hidden"}`}
                id="navbar-default"
            >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                    {Nav.map((value, index) => (
                        <li key={index}>
                            <Link
                                href={value.href}
                                className={`block py-2 px-3 rounded md:p-0 ${activeLink === `${value.href}` ? "text-blue-700" : "text-black"}`}
                                aria-current={activeLink === `${value.href}` ? "page" : undefined}
                            >
                                {value.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}