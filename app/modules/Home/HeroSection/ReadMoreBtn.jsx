
import '../../../assets/HeroSection.css';

export default function ReadMoreBtn({onClick, isExpanded}) {
    return(
        <>
            <button onClick={onClick} className="background_gradient text-white p-3 w-32 rounded-3xl transform transition duration-500 hover:scale-105">{isExpanded ? ("Read Less") : ("Read More")}</button>
        </>
    )
}