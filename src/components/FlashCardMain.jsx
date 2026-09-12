import { use, useState, Suspense } from "react";
import { getStacks } from "../db/database";
import Empty from "./Empty";
import Stacks from "./Stacks";
import StackDetail from "./StackDetail";
import "../index.css";
import Loader from "./Loader";

function StacksMainComponent({ getStacksPromise }) {
  const stacksFromDB = use(getStacksPromise);
  const [stacks, setStacks] = useState(stacksFromDB);
  const [selectedStack, setSelectedStack] = useState("");

  const selectStack = (stack) => {
    setSelectedStack(stack);
  };

  const goBack = () => {
    setSelectedStack("");
  };
  return (
    <div>
      {stacks.length === 0 ? (
        <Empty setStacks={setStacks} />
      ) : selectedStack === "" ? (
        <Stacks
          stacks={stacks}
          setStacks={setStacks}
          selectStack={selectStack}
        />
      ) : (
        <StackDetail stackId={selectedStack} goBack={goBack} />
      )}
    </div>
  );
}

export default function FlashCardMain() {
  const [getStacksPromise] = useState(() => {
    const getStacksPromise = getStacks();
    const delayByDefaultPromise = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    return Promise.all([getStacksPromise, delayByDefaultPromise]).then(
      ([data]) => data,
    );
  });

  return (
    <Suspense fallback={<Loader text={"Loading stacks"} />}>
      <StacksMainComponent getStacksPromise={getStacksPromise} />
    </Suspense>
  );
}
