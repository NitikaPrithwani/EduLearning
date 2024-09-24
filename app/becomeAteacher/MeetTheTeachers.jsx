import Link from "next/link";
import TeachersCard from "../teachers/TeachersCard";
import { TeachersData } from "../../static-data/TeachersData";
import { MdNavigateNext } from "react-icons/md";

export default function MeetTheTeachers() {

    return (
        <>
        <h2 className="md:container md:mx-auto font-bold text-3xl tracking-wide text-center mt-12">Meet The Teachers</h2>
            <div className="md:container md:mx-auto md:flex md:w-4/5 w-4/5 mx-auto my-8 grid grid-cols-1">
                {TeachersData.map((teacher, index) => {
                    if (index < 3) {
                        return (
                            <TeachersCard
                                key={index}
                                teachers={teacher}
                            />
                        );
                    }
                    else if(index == 4){
                        return(
                            <Link href="/teachers"><MdNavigateNext className="text-5xl lg:mt-44 mx-auto my-5 transform transition duration-500 hover:scale-105"/></Link>
                        )
                    }
                })}
            </div>
            
        </>
    )
}
