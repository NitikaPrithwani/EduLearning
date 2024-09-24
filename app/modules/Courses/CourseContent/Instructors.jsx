export default function Instructors() {
    return (
        <>
            <div className="m-5">
                <h2 className="text-2xl font-bold">Instructors</h2>
                <div className="mt-4 text-gray-700">
                    <div className="flex items-start mb-6">
                        <img
                            src="/teacher/2.jpg"
                            alt="Christine Eve"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">Christine Eve</h3>
                            <p className="text-gray-600">
                                Professor of Computer Science
                            </p>
                            <p className="mt-2">
                                Christine Eve has over 15 years of experience in
                                teaching and research in computer science. She
                                specializes in algorithms, data structures, and AI.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start mb-6">
                        <img
                            src="/teacher/1.jpg"
                            alt="David Cooper"
                            className="w-20 h-20 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">David Cooper</h3>
                            <p className="text-gray-600">
                                Senior Software Engineer
                            </p>
                            <p className="mt-2">
                                David Cooper has 10 years of industry experience in
                                web development, cloud computing, and DevOps. He has
                                worked with companies like Google and Amazon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}