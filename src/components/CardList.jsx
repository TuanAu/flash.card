import { useEffect, useState, useRef } from "react";
import AddCardModal from "./AddCardMoal";
import { addCard } from "../db/database";
import Button from "./Button";

function CardDetail({ card }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const applyAnimation = useRef(false);

  const onClickPrompt = () => {
    applyAnimation.current = true;
    setShowAnswer((show) => !show);
  };

  return (
    <div className="mt-8">
      <div
        className={`min-h-[3rem] px-5 pt-8 pb-8 cursor-pointer
            ${
              showAnswer
                ? "bg-neutral-950"
                : "bg-linear-to-r from-neutral-950 to-indigo-950 from-65%"
            }`}
        onClick={onClickPrompt}
      >
        <p className="w-full m-0 break-all hyphens-auto text-white!">
          {card.prompt}
        </p>
      </div>

      <div
        className={`grid ${
          applyAnimation.current
            ? "transition-[grid-template-rows] duration-500"
            : ""
        } ${showAnswer ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="min-[700px]:flex">
            <div className="flex-1 relative max-[700px]:hidden">
              <div className="absolute top-0 right-0 left-0 h-1/2 bg-neutral-950"></div>
              <div className="absolute top-0 right-0 left-0 bottom-0 rounded-tr-[45px] transition-colors duration-1000 bg-olive-200 dark:bg-neutral-900"></div>
            </div>
            <div className="flex-8 min-h-[8rem] flex flex-col transition-colors duration-1000 bg-olive-200 dark:bg-neutral-900">
              <div className="grow bg-linear-to-br from-neutral-950 to-indigo-950 from-45% rounded-bl-[40px] rounded-br-[40px]">
                <p className="m-0 w-full break-all hyphens-auto pt-3 pb-8 px-5">
                  {card.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardList({ stackId, setCards, cards }) {
  console.log("LSSS", cards);
  const [openAddCard, setOpenAddCard] = useState(false);

  const onCloseAddCardModal = () => {
    setOpenAddCard(false);
  };

  const saveNewStack = (data) => {
    const prompt = data.get("prompt");
    const answer = data.get("answer");
    addCard(stackId, prompt, answer).then((cardId) => {
      console.log(cardId);
      setCards((stacks) => [
        ...stacks,
        { id: cardId, stackId: stackId, prompt: prompt, answer: answer },
      ]);
    });

    setOpenAddCard(false);
  };
  return (
    <div>
      <div className="flex justify-end mt-8">
        <Button
          variant={"primary"}
          click={() => {
            setOpenAddCard(true);
          }}
        >
          Add a card
        </Button>
        <AddCardModal
          openModal={openAddCard}
          onCloseModal={onCloseAddCardModal}
          saveNewStack={saveNewStack}
        />
      </div>
      {cards.map((card, idx) => (
        <CardDetail card={card} />
      ))}
    </div>
  );
}
