import { HomeBanner } from "@/static-data/HomeBanner";
import HeroContent from "./HeroContent";
import HeroSectionImage from "./HeroSectionImage";

export default function HeroSection() {
    return (
        <>
            {HomeBanner.map((data, index) => (
                <div
                    key={index}
                    className="md:container flex flex-col md:flex-row justify-between pt-5 w-full md:w-4/5 mx-auto"
                >
                    <HeroSectionImage image={data.image} />
                    <HeroContent
                        subHeading={data.subHeading}
                        heading={data.heading}
                    />
                </div>
            ))}
        </>
    );
}
