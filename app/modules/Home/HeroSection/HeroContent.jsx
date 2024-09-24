"use client";
import { useState } from 'react';
import ReadMoreBtn from "./ReadMoreBtn";
import "../../../assets/HeroSection.css";

export default function HeroContent({subHeading, heading}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipiscing elit. Accusantium, impedit numquam dolsd explicabo similique, eligendi modi dignis recusandae placeat nostrum minus duc");
  
  function ReadMore() {
    setText("Lorem ipsum dolor sit amet consectetur adipiscing elit. Accusantium, impedit numquam dolsd explicabo similique, eligendi modi dignis recusandae placeat nostrum minus duc Lorem ipsum dolor sit amet consectetur adipiscing elit. Accusantium, impedit numquam dolsd explicabo similique, eligendi modi dignis recusandae placeat nostrum minus duc");
    setIsExpanded(true);
  }
  function ReadLess() {
    setText("Lorem ipsum dolor sit amet consectetur adipiscing elit. Accusantium, impedit numquam dolsd explicabo similique, eligendi modi dignis recusandae placeat nostrum minus duc");
    setIsExpanded(false);
  }

  return (
    <div className="flex flex-col justify-center items-center md:items-end md:justify-end md:mb-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center md:text-right color mt-5 font-semibold text-lg sm:text-xl tracking-wide text-gray-800">
        {subHeading}
      </h2>
      <h1 className="text-center md:text-right text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3">
        {heading}
      </h1>
      <p className="text-center md:text-right mt-5 text-base sm:text-lg lg:text-xl text-gray-600 font-semibold">
        {text}
      </p>
      <div className="flex flex-col items-center md:items-end mt-5">
        <ReadMoreBtn btn="Read More" onClick={isExpanded?(ReadLess) : (ReadMore)} isExpanded={isExpanded}/>
      </div>
    </div>
  );
}