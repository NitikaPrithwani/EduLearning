"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { coursesData } from "@/static-data/CoursesData";
import Heading from "./Heading";
import styles from "../../../assets/CourseCard.module.css";

export default function TopFeaturedCourses() {
  const [selectedCategory, setSelectedCategory] = useState("Graphics & Design");

  const categories = [
    "Graphics & Design",
    "Digital Marketing",
    "Writing & Translation",
    "Music & Audio",
  ];

  const filteredCourses = coursesData.filter(
    (course) => course.category === selectedCategory
  );

  return (
    <>
      <Heading />
      <div className={`flex flex-wrap justify-center mb-8 ${styles.categoryTabs}`}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.categoryTab} ${
              selectedCategory === category ? styles.selectedCategory : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={`md:container md:mx-auto md:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${styles.courseGrid}`}>
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} course={course} id={course.id} />
        ))}
      </div>
    </>
  );
}
