export default function PlayBtn({ onClick }) {
  return (
    <img
      src="/HomePageImages/play.png"
      alt="play"
      className="m-auto mt-8 sm:mt-12 mb-16 sm:mb-24 cursor-pointer"
      onClick={onClick}
    />
  );
}