import ContactDetails from "./ContactDetails";
import Map from "./Map";
import QueryForm from "./QueryForm";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Footer/Footer";
import HeroSection from "@/app/Components/HeroSection/HeroSection";

export default function contact() {
    return (
        <>
            <Header />
            <HeroSection image={'/news/newsHeroSection.jpg'} page={"Contact"} />
            <ContactDetails />
            <QueryForm />
            <Map />
            <Footer />
        </>
    )
}