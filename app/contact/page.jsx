import ContactDetails from "./ContactDetails";
import Map from "./Map";
import QueryForm from "./QueryForm";
import Header from "@/app/components/Header/page";
import Footer from "../components/Footer/page";
import HeroSection from "../components/HeroSection/page";

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