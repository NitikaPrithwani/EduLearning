import styles from "../assets/Teachers.css";

export default function TeachersCard({ teachers }) {
    return (
        <>
            <div className="courseCard mx-4 transform transition duration-500 hover:scale-105">
                <img
                    className="courseImage"
                    src={teachers.teacherProfile}
                    alt={teachers.teacherProfile || teachers.teacherProfile}
                />
                <div className="courseDetails">
                    <div className="flex">
                        <h5 className="courseTitle">
                            {teachers.teacherName}
                        </h5>
                    </div>
                    <p className="courseDescription">
                        {teachers.profession}
                    </p>
                    <hr />
                    <div className="courseMeta">
                        <span className="courseRating">
                            {teachers.No_Of_Courses}
                        </span>
                        <div className="flex ">
                            <img src="/teacher/facebook.png" alt="" className="pe-2" />
                            <img src="/teacher/instagram.png" alt="" className="pe-2" />
                            <img src="/teacher/twitter.png" alt="" className="pe-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}