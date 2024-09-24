import ApplyForTeacher from "./ApplyForTeacher";
import HeroSection from "@/app/Components/HeroSection/HeroSection";
import MeetTheTeachers from "./MeetTheTeachers";

export default function Content() {
    return(
        <>
            <HeroSection image={'/teacher/BecomeATeacherHeroSection.jpg'} page={"Become A Teacher"}/>
            <ApplyForTeacher />
            <MeetTheTeachers />
        </>
    )
}