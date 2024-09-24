"use client";
import { ServicesData } from "@/static-data/ServicesData";
import "../../../assets/Card.css";
import { useState } from "react";

export default function Card() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMore = (index) => {
    setExpandedIndex(index);
  };

  const handleReadLess = () => {
    setExpandedIndex(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mx-auto">
      {ServicesData.map((service, index) => {
        const isExpanded = expandedIndex === index;
        const text = isExpanded
          ? `${service.moreDetail}`
          : `${service.Detail}`;

        return (
          <div key={index} className="p-6 rounded-xl shadow-md border transform transition duration-500 hover:scale-105">
            <img
              src={service.image}
              alt="image"
              className="w-full h-40 object-cover rounded-t-lg image"
            />
            <h2 className="text-xl text-gray-950 font-bold mt-4 text-center tracking-wide">
              {service.Heading}
            </h2>
            <p className="text-gray-700 mt-2 text-center ms-4 me-4 tracking-wide">
              {text}
            </p>
            <button
              className="text-blue-600 font-bold tracking-wide mt-4 mb-4 w-full mx-auto"
              onClick={() => {
                isExpanded ? handleReadLess() : handleReadMore(index);
              }}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
