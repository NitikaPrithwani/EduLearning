import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import HeroSection from "../components/HeroSection/HeroSection"
import News from "./News"

export default function AllNews() {
    return (
        <>
            <Header />
            <HeroSection image={'/news/newsHeroSection.jpg'} page={"News"} />
            <News />
            <Footer />
        </>
    )
}