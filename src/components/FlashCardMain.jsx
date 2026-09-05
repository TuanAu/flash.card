import { useEffect, useState } from "react";
import { getStacks } from "../db/database";
import Empty from "./Empty";
import "../index.css";

export default function FlashCardMain() {
  const [stacks, setStacks] = useState([]);
  useEffect(() => {
    async function getStacksFromDB() {
      const stacks = await getStacks();

      console.log(stacks);
    }

    getStacksFromDB();
  });

  return <div>{stacks.length === 0 ? <Empty /> : <div>Ha!</div>}</div>;
}
