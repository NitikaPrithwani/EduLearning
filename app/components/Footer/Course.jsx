import { FooterCourse } from "@/static-data/FooterCourse";

export default function Course() {
    return (
        <>
            {
                FooterCourse.map((course, index) => (
                    <div className="flex mb-5">
                        <div>
                            <div className="w-1 h-7 me-3 rounded-lg bg-white"></div>
                            {
                                course.courses.map((courseName, index) => (
                                    <div className="bg-white w-2 h-2 mt-6 rounded-full"></div>
                                ))
                            }
                        </div>
                        <div>
                            <h3 className="text-2xl tracking-wider font-bold mb-3">{course.heading}</h3>
                            <ul>
                                {
                                    course.courses.map((courseName, index) => (

                                        <li key={index} className="mb-2">{courseName}</li>

                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </>
    )
}