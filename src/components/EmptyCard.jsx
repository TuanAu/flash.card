import { useEffect, useState } from "react";
import { Layers2 } from "lucide-react";

import Button from "./Button";
import AddCardModal from "./AddCardMoal";
import { getCards, addCard } from "../db/database";

export default function EmptyCard({ stackId, setCards }) {
  const [openAddCard, setOpenAddCard] = useState(false);
  useEffect(() => {
    async function getCardsFromDB() {
      const cards = await getCards(stackId);
      console.log(cards);
      setCards(cards);
    }

    getCardsFromDB();
  }, []);

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
        { id: cardId, stackId: stackId, name: prompt, answer: answer },
      ]);
    });

    setOpenAddCard(false);
  };

  return (
    <div className="mt-20 flex flex-col justify-center items-center gap-2">
      <div className="pt-1 pb-1 pl-2 pr-2 bg-gray-100/50 rounded-lg">
        <Layers2 className="w-[15px] text-black" />
      </div>
      <p className="mt-0 font-medium">No card yet</p>
      <div className="mt-3 mb-1">
        <p className="text-sm mt-0">Create a card now.</p>
      </div>
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
  );
}
