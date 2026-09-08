import { useEffect, useState } from "react";
import { getStacks } from "../db/database";
import Empty from "./Empty";
import Stacks from "./Stacks";
import StackDetail from "./StackDetail";
import "../index.css";

export default function FlashCardMain() {
  const [stacks, setStacks] = useState([]);
  const [selectedStack, setSelectedStack] = useState("");

  useEffect(() => {
    async function getStacksFromDB() {
      const stacks = await getStacks();

      setStacks(stacks);
    }

    getStacksFromDB();
  }, []);

  const selectStack = (stack) => {
    console.log(stack);
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
