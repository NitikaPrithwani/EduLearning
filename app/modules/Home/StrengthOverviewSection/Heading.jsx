export default function Heading({heading}) {
    return (
        <>
            <h2 className="md:text-4xl text-2xl md:text-start font-bold mb-4 md:tracking-wider text-center mt-8">
                {heading}
            </h2>
        </>
    )
}