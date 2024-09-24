export default function SlideBtn({onPrevClick, onNextClick}) {
    return (
        <>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8">
                <button
                    onClick={onPrevClick}
                    className="bg-white text-blue-500 p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                    &lt;
                </button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8">
                <button
                    onClick={onNextClick}
                    className="bg-white text-blue-500 p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                    &gt;
                </button>
            </div>
        </>
    )
}