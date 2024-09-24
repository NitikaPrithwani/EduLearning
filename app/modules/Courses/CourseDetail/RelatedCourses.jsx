import CourseCard from "@/app/Modules/Home/TopFeaturedCourses/CourseCard";
import { CourseData } from "@/static-data/CourseData";

export default function RelatedCourses({ courseDetail }) {
    const currentCategory = courseDetail[0].category;
    const currentCourseId = courseDetail[0].id;

    const relatedCourses = CourseData.filter(course =>
        course.category === currentCategory && course.id !== currentCourseId
    );
    const topRelatedCourses = relatedCourses.slice(0, 3);

    return (
        <div className="md:container md:mx-auto">
            <h2 className="font-bold text-2xl md:text-3xl md:mx-auto md:w-4/5 mt-10">
                Related Courses
            </h2>
            <section className="py-12 bg-white">
                <div className="flex justify-center grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-[8rem] md:w-[800px]">
                    {topRelatedCourses.map((course) => (
                        <CourseCard key={course.id} course={course} id={course.id} />
                    ))}
                </div>
            </section>
        </div>
    );
}
