import { use, useState, Suspense } from "react";
import { getCards } from "../db/database";
import EmptyCard from "./EmptyCard";
import CardList from "./CardList";
import Loader from "./Loader";

function Cards({ stackId, getCardsPromise }) {
  const cardsFromDb = use(getCardsPromise);
  const [cards, setCards] = useState(cardsFromDb);

  return (
    <div>
      {cards.length === 0 ? (
        <EmptyCard stackId={stackId} setCards={setCards} />
      ) : (
        <CardList stackId={stackId} setCards={setCards} cards={cards} />
      )}
    </div>
  );
}

export default function StackDetail({ stackId, goBack }) {
  const [getCardsPromise] = useState(() => {
    const getCardsPromise = getCards(stackId);
    const delayByDefaultPromise = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    return Promise.all([getCardsPromise, delayByDefaultPromise]).then(
      ([data]) => data,
    );
  });
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
      <Suspense fallback={<Loader text={"Loading cards"} />}>
        <Cards stackId={stackId} getCardsPromise={getCardsPromise} />
      </Suspense>
    </div>
  );
}
