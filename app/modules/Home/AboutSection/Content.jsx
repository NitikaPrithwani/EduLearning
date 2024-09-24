"use client";
import { useState } from 'react';
import ReadMoreBtn from "../HeroSection/ReadMoreBtn";
import Heading from "./Heading";

export default function Content({heading}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [text, setText] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, minima aliquid aut deserunt veritatis nesciunt debitis vero tenetur consequatur quos earum eaque ex expedita, et magni quo? Distinctio, vel modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi earum libero enim totam fuga. Nesciunt non cupiditate unde ducimus perferendis aperiam quaerat quidem doloribus quod odit deserunt, ex velit.");

  function ReadMore() {
    setText("Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, minima aliquid aut deserunt veritatis nesciunt debitis vero tenetur consequatur quos earum eaque ex expedita, et magni quo? Distinctio, vel modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi earum libero enim totam fuga. Nesciunt non cupiditate unde ducimus perferendis aperiam quaerat quidem doloribus quod odit deserunt, ex velit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, minima aliquid aut deserunt veritatis nesciunt debitis vero tenetur consequatur quos earum eaque ex expedita, et magni quo? Distinctio, vel modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi earum libero enim totam fuga. Nesciunt non cupiditate unde ducimus perferendis aperiam quaerat quidem doloribus quod odit deserunt, ex velit.");
    setIsExpanded(true);
  }

  function ReadLess() {
    setText("Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, minima aliquid aut deserunt veritatis nesciunt debitis vero tenetur consequatur quos earum eaque ex expedita, et magni quo? Distinctio, vel modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quasi earum libero enim totam fuga. Nesciunt non cupiditate unde ducimus perferendis aperiam quaerat quidem doloribus quod odit deserunt, ex velit.");
    setIsExpanded(false);
  }

  return (
    <div className="flex flex-col items-center text-center md:text-left md:items-start lg:flex-grow md:w-3/5 md:pr-16 mb-16 md:mb-0">
      <Heading heading={heading} />
      <p className="mb-8 leading-relaxed text-lg md:text-lg">
        {text}
      </p>
      <ReadMoreBtn onClick={isExpanded?(ReadLess) : (ReadMore)} isExpanded={isExpanded} />
    </div>
  );
}
