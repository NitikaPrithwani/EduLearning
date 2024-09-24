import { testimonials } from "@/static-data/TestimonialsData";

export default function TestimonialCard({ currentSlide }) {
    return (
        <>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`${index === currentSlide ? "block" : "hidden"
                            } flex flex-col md:flex-row items-center md:items-start max-w-full md:max-w-5xl transition-all duration-500 ease-in-out`}
                    >
                        <div className="flex-shrink-0 w-full md:w-auto">
                            <div className="w-full md:w-96 md:h-96 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${testimonial.imageSrc})` }} />
                        </div>
                        <div className="bg-white text-gray-600 marginLeft rounded-xl shadow-lg p-6 md:p-8 w-full md:w-7/12 mt-6 md:mt-0">
                            <p className="italic mb-4 text-lg md:text-xl tracking-wide">&quot;{testimonial.quote}&quot;</p>
                            <h4 className="text-xl md:text-3xl tracking-wider text-gray-900">{testimonial.name}</h4>
                            <p className="text-blue-500 text-base md:text-base">{testimonial.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
