"use client";

import { useState } from "react";
import CourseCard from "../modules/Home/TopFeaturedCourses/CourseCard";
import { CourseData } from "../../static-data/CourseData";
import "../assets/Course.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "./HeroSection";

export default function courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Featured",
    "Business",
    "Photography",
    "Development",
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? CourseData
      : CourseData.filter((course) => course.category === selectedCategory);

  return (
    <>
      <Header />
      <HeroSection />
      <div className="md:container md:mx-auto categoryTabs">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${"categoryTab"} ${selectedCategory === category ? "selectedCategory" : ""
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="md:container md:mx-auto md:w-4/5 courseGrid grid grid-cols-1 mb-5">
        {filteredCourses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
            id={course.id}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
