import { CourseData } from "@/static-data/CourseData";
import Heading from "../Heading";
import Header from "@/app/Components/Header/Header";
import HeroSection from "../HeroSection";
import Footer from "@/app/Components/Footer/Footer";
import SocialMediaHandles from "@/app/modules/Courses/CourseDetail/SocialMediaHandles";
import CourseDetail from "@/app/modules/Courses/CourseDetail/CourseDetail";
import CourseAside from "@/app/modules/Courses/CourseDetail/CourseAsideSection";
import CourseBenifit from "@/app/modules/Courses/CourseContent/CourseBenifits";
import NewCourseAside from "@/app/modules/Courses/CourseDetail/NewCourseAsideSection";
import RelatedCourses from "@/app/modules/Courses/CourseDetail/RelatedCourses";


export default function page({ params }) {
    const { id } = params;
    const eachCourseData = (id) => {
        return CourseData.filter((course) => course.id == id);
    };
    const courseDetail = eachCourseData(id);

    return (
        <>
            <Header />
            <HeroSection />
            <Heading />
            <div className="md:container md:flex md:w-4/5 md:mx-auto">
                <CourseDetail courseDetail={courseDetail} />
                <CourseAside courseDetail={courseDetail} />
            </div>
            <div className="md:container md:flex md:w-4/5 md:mx-auto">
                <CourseBenifit />
                <NewCourseAside />
            </div>
            <SocialMediaHandles courseDetail={courseDetail} />
            <RelatedCourses courseDetail={courseDetail} />
            <Footer />
        </>
    );
}