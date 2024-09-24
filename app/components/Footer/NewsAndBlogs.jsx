import { FooterNewsAndBlogs } from "@/static-data/FooterNewsAndBlogs";
import { IoCalendarOutline } from "react-icons/io5";

export default function NewsAndBlogs() {
    return (
        <>
            {
                FooterNewsAndBlogs.map((data, index) => (
                    <div className="flex mb-5">
                        <div>
                            <div className="w-1 h-7 me-3 rounded-lg bg-white"></div>
                            {
                                data.news.map((newsData, index) => (
                                    <div className="bg-white w-2 h-2 mt-12 rounded-full"></div>
                                ))
                            }
                        </div>
                        <div>
                            <h3 className="text-2xl tracking-wider font-bold mb-4">
                                {data.heading}
                            </h3>
                            <ul>
                                {
                                    data.news.map((newsData, index) => (
                                        <li className="mb-2">
                                            <a href="#" className="hover:underline font-bold tracking-[0.15em]">
                                                {newsData.heading} <br /> Branding Info.
                                            </a>
                                            <p className="text-sm flex">
                                                <span className="me-2 mt-1">
                                                    <IoCalendarOutline />
                                                </span>
                                                {newsData.date}
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </>
    )
}