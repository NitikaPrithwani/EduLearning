export default function TotalSuccStudents({TotalSuccStudents}) {
    return (
        <>
            <div className="bg-white text-black rounded-full px-12 md:px-7 py-2 inline-flex items-center">
                <span className="text-3xl font-bold mr-2">{TotalSuccStudents}</span>
                <span className="font-bold">Successful <br /> students</span>
            </div>
        </>
    )
}