import { FaStar } from "react-icons/fa";

export default function NewCourseAside() {
    return (
        <>
            <div className="md:ms-5 mt-5 md:w-[300px] w-full h-[500px] mb-5 border border-gray-300 rounded-2xl">
                <div className="mt-8">
                    <h2 className="text-xl font-bold ms-5">New Courses</h2>
                </div>

                <div className="flex ms-5 mt-6">
                    <img
                        src="/courses/1.png"
                        alt="clock"
                        className="rounded-full h-[60px] mt-2"
                    />
                    <div className="ms-2">
                        <h2 className="font-bold">
                            What is Lorem <br className="hidden" /> Ipsum ?
                        </h2>
                        <div className="flex">
                            <p className="text-blue-500 font-bold">$30.00</p>
                            <p className="flex">
                                <FaStar className="text-blue-500 mt-1 ms-6" />
                                <span className="ms-1 font-bold text-gray-900">4.3</span>
                                <span className="text-gray-500">(20)</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex ms-5 mt-6">
                    <img
                        src="/courses/2.png"
                        alt="clock"
                        className="rounded-full h-[60px] mt-2"
                    />
                    <div className="ms-2">
                        <h2 className="font-bold">
                            React - The Complete <br className="hidden" /> Instruction{" "}
                        </h2>
                        <div className="flex">
                            <p className="text-blue-500 font-bold">$30.00</p>
                            <p className="flex">
                                <FaStar className="text-blue-500 mt-1 ms-6" />
                                <span className="ms-1 font-bold text-gray-900">4.2</span>
                                <span className="text-gray-500">(18)</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex ms-5 mt-6">
                    <img
                        src="/courses/3.png"
                        alt="clock"
                        className="rounded-full h-[60px] mt-2"
                    />
                    <div className="ms-2">
                        <h2 className="font-bold">
                            Lorem Ipsum is simply <br className="hidden" /> dummy text
                        </h2>
                        <div className="flex">
                            <p className="text-blue-500 font-bold">$30.00</p>
                            <p className="flex">
                                <FaStar className="text-blue-500 mt-1 ms-6" />
                                <span className="ms-1 font-bold text-gray-900">4.1</span>
                                <span className="text-gray-500">(23)</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex ms-5 mt-6">
                    <img
                        src="/courses/4.png"
                        alt="clock"
                        className="rounded-full h-[60px] mt-2"
                    />
                    <div className="ms-2">
                        <h2 className="font-bold">
                            React - The Complete <br className="hidden" /> Instruction
                        </h2>
                        <div className="flex">
                            <p className="text-blue-500 font-bold">$30.00</p>
                            <p className="flex">
                                <FaStar className="text-blue-500 mt-1 ms-6" />
                                <span className="ms-1 font-bold text-gray-900">4.5</span>
                                <span className="text-gray-500">(20)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}