"use client";
import { useState } from "react";
import { testimonials } from "@/static-data/TestimonialsData";
import "../../../assets/Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import Heading from "./Heading";
import SlideBtn from "./SlideBtn";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative bgImage text-white py-16 mb-12">
      <Heading />
      <TestimonialCard currentSlide={currentSlide} />
      <SlideBtn onPrevClick={prevSlide} onNextClick={nextSlide}/>

      <div className="flex justify-center mt-6 md:mt-8 mb-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${index === currentSlide ? "bg-white" : "bg-gray-400"
              } w-3 h-3 rounded-full`}
          ></button>
        ))}
      </div>
    </div>
  );
}
