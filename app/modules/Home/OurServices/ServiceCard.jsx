import Image from "next/image";

export default function Card({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 md:w-1/4 w-full border-r-2">
      <div className="relative w-20 h-20 mb-4 rounded-full flex items-center justify-center">
        <Image src={imageSrc} alt={title} width={80} height={80} />
      </div>
      <h2 className="text-gray-900 text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}