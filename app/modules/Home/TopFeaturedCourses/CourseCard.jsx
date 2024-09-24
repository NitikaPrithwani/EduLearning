import styles from "../../../assets/CourseCard.module.css";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

function calculateAverageRating(subratings) {
  if (!subratings || subratings.length === 0){
    return 0;
  }
  const total = subratings.reduce((acc, rating) => acc + parseFloat(rating), 0);
  return (total / subratings.length).toFixed(1);
}

export default function CourseCard({ course, id }) {
  const averageRating = calculateAverageRating(course.subratings);
  
  return (
    <Link href={`/courses/${id}`} passHref legacyBehavior>
      <div className={`${styles.courseCard} mb-8 mt-8 lg:mt-0 transform transition duration-500 hover:scale-105`} >
        <img
          className={`${styles.courseImage} w-full h-auto`}
          src={course.imageSrc}
          alt={course.teacher || course.course}
        />
        <div className={styles.courseDetails}>
          <div className="flex items-center mb-2">
            <img src={course.teacherProfile} alt="#" className="w-12 h-12 rounded-full mr-2" />
            <h5 className={`${styles.courseTitle} text-sm sm:text-base font-semibold`}>
              {course.teacher || course.course}
            </h5>
          </div>
          <p className={`${styles.courseDescription} text-xs sm:text-sm md:text-base font-semibold text-gray-700`}>
            {course.courseDetail || course.profession}
          </p>
          <div className="text-xs sm:text-sm md:text-base mb-2">{course.category}</div>
          <hr className="my-2" />
          <div className={styles.courseMeta}>
            <span className={`${styles.courseRating} text-xs sm:text-sm md:text-base`}>
              <FaStar className="text-blue-500" /> 
              <p className="text-gray-700">
                <span className={styles.ratingValue}>{averageRating} </span>({course.no_of_reviews})
              </p>
            </span>
            <button className="selectedCategory text-white p-2 rounded-3xl text-xs sm:text-sm md:text-base">
              Price: {course.price}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
