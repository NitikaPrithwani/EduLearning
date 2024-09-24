import "../assets/Course.css";

export default function HeroSection() {
  return (
    <>
      <div className="md:container-fluid CoursebgImage lg:h-[260px] h-[127px] relative">
        <p className="text-white text-2xl lg:text-5xl font-bold tracking-wider lg:w-4/5 lg:mx-10 float-start ps-7 pt-3 lg:ps-28 lg:pt-20">Courses</p>
        <div className="bg-white absolute px-4 py-2 rounded-lg right-8 lg:right-36 top-[0px] lg:top-40 my-12">
          <p>Home/<span className="text-blue-500">Courses</span></p>
        </div>
      </div>
    </>
  );
}
