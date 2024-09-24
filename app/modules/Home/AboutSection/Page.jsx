import Content from "./Content";
import AboutSectionImage from "./AboutSectionImage";
import { AboutUsData } from "@/static-data/AboutUsData";

export default function AboutSection() {
	return (
		<>
			{AboutUsData.map((data, index) => (
				<section key={index} className="md:container text-gray-600 body-font md:w-4/5 md:mx-auto">
					<div className="flex flex-col-reverse md:flex-row items-center py-12 md:py-24">
						<Content heading={data}  /> 
						<AboutSectionImage AboutUsImg={data} />
					</div>
				</section>
			))}
		</>
	);
}
