export default function CommentsSection({ newsDetail }) {

    return (
        <>
            <p className="md:container md:mx-auto md:w-4/5 w-4/5 mx-auto mb-8 font-bold">0{newsDetail[0].comments.length} COMMENTS</p>
            {
                newsDetail[0].comments.map((comment, index) => (
                    <div className="md:container md:mx-auto md:w-4/5 w-4/5 mx-auto flex transform transition duration-500 hover:scale-105">
                        <img src={comment.image} alt="" className="w-24 mt-1 me-5 h-16 rounded-xl" />
                        <div className="bg-blue-500 rounded-2xl mb-3">
                            <h2 className="text-white pt-3 ps-3 pe-3">{comment.commentedBy}</h2>
                            <p className="text-white ps-3 pe-3 pb-3">{comment.comment}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}