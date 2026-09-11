import { useEffect, useState } from "react";
import { getCards } from "../db/database";
import EmptyCard from "./EmptyCard";
import CardList from "./CardList";
export default function StackDetail({ stackId, goBack }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCardsFromDB() {
      const cards = await getCards(stackId);
      console.log(cards);
      setCards(cards);
    }

    getCardsFromDB();
  }, []);

  return (
    <div>
      <div>
        <p
          className="cursor-pointer underline underline-offset-3
        decoration-pink-500/50 dark:decoration-pink-500/60 hover:decoration-wavy active:decoration-wavy"
          onClick={goBack}
        >
          Return to stacks
        </p>
      </div>
      {cards.length === 0 ? (
        <EmptyCard stackId={stackId} setCards={setCards} />
      ) : (
        <CardList  stackId={stackId} setCards={setCards} cards={cards} />
      )}
    </div>
  );
}
