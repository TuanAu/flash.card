import { useEffect, useState, useRef } from "react";

function CardDetail({ card }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const applyAnimation = useRef(false);
  const onClickPrompt = () => {
    applyAnimation.current = true;
    setShowAnswer((show) => !show);
  };

  return (
    <div className="mt-5">
      <div
        className="bg-linear-to-r from-neutral-950 to-indigo-950 from-70%
         min-h-[3rem] p-5
         cursor-pointer"
        onClick={onClickPrompt}
      >
        <p className="w-full mt-0 break-all hyphens-auto text-white!">
          {card.prompt}
        </p>
      </div>
      <div
        className={`flex min-h-[5rem] transition duration-500 ${
          !applyAnimation.current
            ? "[clip-path:inset(0_0_100%_0)]"
            : showAnswer
              ? "animate-card-slide-down"
              : "animate-card-slide-up"
        }`}
      >
        <div className="flex-2 relative">
          <div className="absolute top-0 right-0 left-0 h-1/2 bg-neutral-950"></div>
          <div
            className="absolute top-0 right-0 left-0 bottom-0 rounded-tr-[45px]
            transition-colors duration-1000 bg-olive-200 dark:bg-neutral-900"
          ></div>
        </div>
        <div
          className="flex-8
            transition-colors duration-1000 bg-olive-200 dark:bg-neutral-900"
        >
          <div
            className="h-full 
          bg-linear-to-r from-neutral-950 to-indigo-950 from-63%
          rounded-bl-[40px] rounded-br-[40px]"
          >
            <p className="mt-0 w-full mt-0 break-all hyphens-auto pt-3 pb-8 pl-8 pr-8">
              {card.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardList({ cards }) {
  return (
    <div>
      {cards.map((card, idx) => (
        <CardDetail card={card} />
      ))}
    </div>
  );
}
