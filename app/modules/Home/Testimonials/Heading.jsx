import "../../../assets/Testimonials.css";

export default function Heading() {
    return(
        <>
        <div className="flex flex-col marginLeftHeading md:flex-row items-center md:items-start justify-center md:justify-start mx-auto px-4 md:px-0">
        <div className="bg-white sm:h-1 sm:w-16 md:h-20 md:w-1"></div>
        <div className="text-center md:text-left md:ml-6 mt-4 md:mt-0">
          <p className="text-sm md:text-base">OUR STUDENTS HELPS US TO STRIVE FOR MORE</p>
          <h1 className="text-2xl md:text-4xl tracking-widest mt-2 ">What Our Students Say</h1>
        </div>
      </div>
        </>
    )
}