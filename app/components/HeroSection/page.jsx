export default function HeroSection({image,page}) {
    return (
        <>
            <div className="lg:h-[260px] h-[127px] relative" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover'
            }}>
                <p className=" text-white text-3xl lg:text-5xl font-bold tracking-wider lg:w-4/5 lg:mx-10 float-start ps-7 pt-8 lg:ps-28 lg:pt-20">{page}</p>
                <div className="bg-white absolute px-4 py-2 rounded-lg right-8 lg:right-32 top-[45px] lg:top-44 my-12">
                    <p>Home/<span className="text-blue-500">{page}</span></p>
                </div>
            </div>
        </>
    )
}