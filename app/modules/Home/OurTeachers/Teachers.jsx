import { teachers } from "@/static-data/Data";

export default function Teachers() {
    return (
        <>
            <div className="w-4/5 mx-auto mt-12 mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                {teachers.map((teacher, index) => (
                    <div
                        key={index}
                        className="rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                    >
                        <div className="relative h-76 w-auto">
                            <img
                                src={teacher.image}
                                alt={teacher.name}
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div>
                            <div
                                className="p-4 text-center mb-4"
                                style={{
                                    backgroundImage:
                                        "url('/HomePageImages/plain-background.png')",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="flex justify-center space-x-4 mb-4">
                                    {teacher.socials.map((social, i) => (
                                        <a
                                            href={social.link}
                                            key={i}
                                            className="text-white text-lg"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-center text-blue-500">
                                {teacher.name}
                            </h3>
                            <p className="text-center text-gray-500 mb-5">
                                {teacher.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}