export default function CourseAside({courseDetail}) {
    return (
        <>
            <div className="md:ms-5 w-full md:w-[300px] h-[500px]  border border-gray-300 rounded-2xl">
                <div className="flex items-center justify-center mt-8">
                    <p className="font-bold text-2xl me-1">{courseDetail[0].price}</p>
                    <p className="text-gray-500 font-semibold">
                        <del>{courseDetail[0].priceBefore}</del>
                    </p>
                </div>
                <button
                    className="mt-4 w-4/5 text-white md:ms-5 ms-9 py-2 px-4 rounded-2xl"
                    style={{
                        backgroundImage: `url("/HomePageImages/plain-background.png")`,
                        backgroundSize: "cover",
                    }}
                >
                    Buy This Course
                </button>
                <hr className="mt-5 bg-gray-900 mb-5" />
                <div className="flex md:m-6 m-6 ms-8">
                    <img src="/courses/clock.png" alt="clock" />
                    <p className="font-semibold">
                        Durations:{" "}
                        <span className="text-blue-500">{courseDetail[0].Duration}</span>
                    </p>
                </div>
                <div className="flex md:m-6 m-6 ms-8">
                    <img src="/courses/folder.png" alt="" />
                    <p className="font-semibold">
                        lectures:{" "}
                        <span className="text-blue-500">{courseDetail[0].Lectures}</span>
                    </p>
                </div>
                <div className="flex md:m-6 m-6 ms-8">
                    <img src="/courses/student.png" alt="" />
                    <p className="font-semibold">
                        Students:{" "}
                        <span className="text-blue-500">{courseDetail[0].Students}</span>
                    </p>
                </div>
                <div className="flex md:m-6 m-6 ms-8">
                    <img src="/courses/video.png" alt="" />
                    <p className="font-semibold">
                        Video:{" "}
                        <span className="text-blue-500">{courseDetail[0].Video}</span>
                    </p>
                </div>
                <div className="flex md:m-6 m-6 ms-8">
                    <img src="/courses/skill-level.png" alt="" />
                    <p className="font-semibold">
                        Skill Level:{" "}
                        <span className="text-blue-500">
                            {courseDetail[0].SkillLevel}
                        </span>
                    </p>
                </div>
                <div className="flex md:m-6 m-6 ms-8">
                    <img src="/courses/language.png" alt="" />
                    <p className="font-semibold">
                        Language:{" "}
                        <span className="text-blue-500">{courseDetail[0].Language}</span>
                    </p>
                </div>
            </div>
        </>
    )
}