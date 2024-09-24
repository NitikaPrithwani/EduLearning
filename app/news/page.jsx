import Footer from "../components/Footer/page"
import Header from "../components/Header/page"
import HeroSection from "../components/HeroSection/page"
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