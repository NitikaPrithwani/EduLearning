export default function Card({ card }) {
    return (
      <div className="bg-white text-black flex items-center p-4 rounded-full shadow-md w-full md:w-80">
        <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-18 rounded-full mr-4 md:mr-8">
          <img
            src={card.image}
            alt="Learners"
            className="w-12 h-12 md:w-20 md:h-20"
          />
        </div>
        <div>
          <span className="text-lg md:text-2xl font-bold">{card.count}</span>
          <p className="text-sm md:text-base">{card.title}</p>
        </div>
      </div>
    );
  }