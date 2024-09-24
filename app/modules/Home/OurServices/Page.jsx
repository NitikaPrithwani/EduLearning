import Card from "./ServiceCard";
import applyOnlineImg from "/public/HomePageImages/apply-online.png";
import pressReleaseImg from "/public/HomePageImages/press-release.png";
import onlineClassImg from "/public/HomePageImages/online-class.png";
import scholarshipImg from "/public/HomePageImages/scholarship.png";

export default function OurServices() {
  return (
    <div className="md:container md:mx-auto py-10 w-full md:w-4/5">
      <section className="w-full border border-gray-200 md:mx-auto bg-white shadow-lg p-8 rounded-3xl flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        <Card
          imageSrc={applyOnlineImg}
          title="Apply Online"
          description="Lorem Ipsum dolor"
        />
        <Card
          imageSrc={pressReleaseImg}
          title="Press Release"
          description="Lorem Ipsum dolor"
        />
        <Card
          imageSrc={onlineClassImg}
          title="Online Class"
          description="Lorem Ipsum dolor"
        />
        <Card
          imageSrc={scholarshipImg}
          title="Scholarship"
          description="Lorem Ipsum dolor"
        />
      </section>
    </div>
  );
}