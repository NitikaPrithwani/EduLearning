import { FaStar } from "react-icons/fa";

export default function CourseDetail({courseDetail}) {
    return (
        <>
            <div className="md:w-[800px] mb-5 w-full">
                <img
                    src={courseDetail[0].imageSrc}
                    alt="Course Image"
                    className="w-full md:w-[800px] rounded-2xl h-[400px]"
                />
                <div className="flex mt-5">
                    <img src={courseDetail[0].teacherProfile} alt="" className="w-12" />
                    <p className="mt-2 ms-2 font-bold">
                        {courseDetail[0].teacher || courseDetail[0].course}
                    </p>
                    <div className="w-[1px] ms-5 h-10 bg-gray-700"></div>
                    <p className="flex">
                        <FaStar className="text-blue-500 mt-3 ms-2" />
                        <span className="mt-2 ms-1 font-bold text-blue-500">4.3</span>
                        <span className="mt-2">(20)</span>
                    </p>
                </div>
            </div>
        </>
    )
}