'use client'
import Link from "next/link";
import "../assets/News.css";
import { increment } from "@/store/slice";
import { useSelector, useDispatch } from "react-redux";

export default function NewsCard({news, id}) {
    const dispatch = useDispatch()
    const likes = useSelector((state) => {
        const likeItem = state.counter.likes.find(item => item.id === id);
        return likeItem ? likeItem.likesNo : 0;
    });
    function increaseLike(){
        dispatch(increment(id))
    }
    
    return (
        <>
            <div
                key={news.id}
                className="m-[5px] rounded-xl overflow-hidden mb-8 transform transition duration-500 hover:scale-105"
            >
                <div className="relative">
                    <img
                        src={news.image}
                        alt={news.title}
                        width={400}
                        height={250}
                        className="w-full h-56 rounded-3xl object-cover"
                    />
                    <div className="absolute bg-blue-500 md:left-[275px] left-72 w-20 h-32 rounded-2xl" style={{ top: "1rem"}}>
                        <div className="flex">
                            <img src="/news/comment.png" alt="" className="pe-1 pt-2 pb-2 ps-2 cursor-pointer" /><span className="text-white pe-2 pt-2 pb-2 cursor-pointer">(250)</span>
                        </div>
                        <div className="flex">
                            <img src="/news/view.png" alt="" className="pe-1 pt-2 pb-2 ps-2 cursor-pointer" /><span className="text-white pe-2 pt-2 pb-2 cursor-pointer">(100)</span>
                        </div>
                        <div className="flex">
                            <img src="/news/wishlist.png" alt="" className="pe-1 pt-2 pb-2 ps-2 cursor-pointer" onClick={increaseLike}/><span className="text-white pe-2 pt-2 pb-2 cursor-pointer">({likes})</span>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-lg font-bold textTruncate me-3 text-gray-800  mt-5 mb-2">
                        {news.title}
                    </p>
                    <h3 className="text-gray-600 me-8 textTruncateNewsDetail text-sm  mb-4">
                        {news.newsDetail}
                    </h3>
                    <div className="flex justify-between">
                        <Link href={`/news/${id}`} className="text-blue-500 text-sm font-semibold">
                            READ MORE &gt; &gt;
                        </Link>
                        <div className="flex">
                            <img src="/news/user (6).png" alt="userImage" className="mt-0.5 me-0.5" style={{ width: "15px", height: "15px" }} />
                            <p className="text-gray-800 text-sm pe-1">Posted By {news.PostedBy}</p>
                            <button className="text-xs md:p-0 bg-blue-500 text-white">{news.date}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
