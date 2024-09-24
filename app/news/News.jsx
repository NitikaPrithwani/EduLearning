import { NewsData } from "@/static-data/NewsData";
import "../assets/News.css";
import NewsCard from "./NewsCard";

export default function News() {
    return (
        <>
            <section className="md:container md:mx-auto py-12 bg-white lg:w-4/5 lg:mx-auto">
                <div className="flex justify-center grid grid-cols-1 lg:grid-cols-3">
                    {NewsData.map((news, index) => (
                        <NewsCard key={index} news={news} id={news.id} />
                    ))}
                </div>
            </section>
        </>
    )
}