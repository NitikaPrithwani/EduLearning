export default function AboutSectionImage({AboutUsImg}) {
  return (
    <div className="w-full md:w-2/5 lg:max-w-lg mt-8 md:mt-0">
      <img
        className="object-cover object-center rounded-full"
        alt="About Us"
        src={AboutUsImg.image}
        layout="responsive"
      />
    </div>
  );
}