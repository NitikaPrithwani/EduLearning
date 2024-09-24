import NewsCard from "@/app/news/NewsCard";
import { NewsData } from "@/static-data/NewsData";
export default function RelatedPosts() {
    return (
        <>
            <h2 className="md:container md:mx-auto md:w-4/5 font-bold text-3xl text-center mt-24">Related Posts</h2>
            <section className="md:container md:mx-auto md:w-4/5 py-12 bg-white md:w-4/5 md:mx-auto">
                <div className="flex justify-center grid grid-cols-1 md:grid-cols-3 space-x-2">
                    {NewsData.map((news, index) => {
                        if (index == 6 || index == 7 || index == 8) {
                            return (
                                <NewsCard key={index} news={news} id={news.id} />
                            )
                        }
                    })}
                </div>
            </section>
        </>
    )
}