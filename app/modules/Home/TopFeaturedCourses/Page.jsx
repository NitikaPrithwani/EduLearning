"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { coursesData } from "@/static-data/CoursesData";
import Heading from "./Heading";
import styles from "../../../assets/CourseCard.module.css";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function TopFeaturedCourses() {
  const [selectedCategory, setSelectedCategory] = useState("Graphics & Design");
  const [loading, setLoading] = useState(false);

  const categories = [
    "Graphics & Design",
    "Digital Marketing",
    "Writing & Translation",
    "Music & Audio",
  ];

  const filteredCourses = coursesData.filter(
    (course) => course.category === selectedCategory
  );

  const handleCategoryChange = (category) => {
    setLoading(true);
    setSelectedCategory(category);
    
    setTimeout(() => {
      setLoading(false);
    }, 500); 
  };

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
            onClick={() => handleCategoryChange(category)}
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
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
