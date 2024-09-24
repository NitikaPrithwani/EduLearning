import { TeachersData } from "../../static-data/TeachersData";
import TeachersCard from "./TeachersCard";
import "../assets/Teachers.css";
import Link from "next/link";

export default function AllTeachers() {
    return (
        <>
            <div className="md:container md:mx-auto md:w-4/5 courseGrid w-5/5 mx-auto">
                {TeachersData.map((teacher, index) => (
                    <TeachersCard
                        key={index}
                        teachers={teacher}
                    />
                ))}
            </div>
            <div className="mb-12 grid justify-items-center">
                <Link href="/becomeAteacher">
                    <button className="buttonBgImg shadow-xl shadow-current">Apply for <br /> Become A Teacher</button>
                </Link>
            </div>
        </>
    )
}