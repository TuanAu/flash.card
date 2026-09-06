import { useEffect, useState } from "react";
import { getStacks } from "../db/database";
import Empty from "./Empty";
import Stacks from "./Stacks";
import "../index.css";

export default function FlashCardMain() {
  const [stacks, setStacks] = useState([]);
  useEffect(() => {
    console.log("effect");
    async function getStacksFromDB() {
      const stacks = await getStacks();

      setStacks(stacks);
    }

    getStacksFromDB();
  }, []);

  return (
    <div>
      {stacks.length === 0 ? (
        <Empty setStacks={setStacks} />
      ) : (
        <Stacks stacks={stacks} />
      )}
    </div>
  );
}
