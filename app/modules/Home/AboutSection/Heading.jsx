export default function Heading({heading}) {
  return (
    <>
      <h2 className="md:text-right font-semibold text-2xl tracking-[.1em] color text-center">
        {heading.subHeading}
      </h2>
      <h1 class="title-font text-4xl mb-4 font-bold pt-3 text-gray-900 tracking-[.04em]">
        {heading.heading}
      </h1>
    </>
  );
}
