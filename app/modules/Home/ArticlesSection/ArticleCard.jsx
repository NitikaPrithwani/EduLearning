"use client";
import { useState } from 'react';

export default function ArticleCard({ article }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMoreClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="max-w-lg rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="relative">
                <img
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-44 left-4 text-white bgGradient text-xs font-semibold px-4 py-2 rounded-full">
                    {article.date}
                </div>
            </div>
            <div className="p-4">
                <p className="text-gray-900 text-sm mb-2 mt-5">
                    👤 BY {article.author}
                </p>
                <h3 className={`text-lg font-semibold text-gray-800 mb-4 ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`}>
                    {article.title}
                </h3>
                <button
                    onClick={handleReadMoreClick}
                    className="text-blue-500 text-sm font-semibold"
                >
                    {isExpanded ? 'SHOW LESS' : 'READ MORE >'}
                </button>
            </div>
        </div>
    );
}