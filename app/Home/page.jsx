import AboutSection from "../modules/Home/AboutSection/Page";
import ArticlesSection from "../modules/Home/ArticlesSection/Page";
import CampusVideoSection from "../modules/Home/CampusVideoSection/Page";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../modules/Home/HeroSection/Page";
import OurServices from "../modules/Home/OurServices/Page";
import OurTeachers from "../modules/Home/OurTeachers/Page";
import StrengthOverview from "../modules/Home/StrengthOverviewSection/Page";
import Testimonials from "../modules/Home/Testimonials/Page";
import TopFeaturedCourses from "../modules/Home/TopFeaturedCourses/Page";
import WhyUsSection from "../modules/Home/WhyUsSection/Page";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* <OurServices /> */}
      <AboutSection />
      <TopFeaturedCourses />
      <CampusVideoSection />
      <WhyUsSection />
      <StrengthOverview />
      <OurTeachers />
      <Testimonials />
      <ArticlesSection />
      <Footer />
    </>
  );
}
