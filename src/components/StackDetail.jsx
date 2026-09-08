import { useEffect, useState } from "react";
import { Layers2 } from "lucide-react";

import Button from "./Button";
import AddCardModal from "./AddCardMoal";
import { getStack } from "../db/database";

export default function StackDetail({ stackId, goBack }) {
  const [stack, setStack] = useState({});
  const [openAddCard, setOpenAddCard] = useState(false);
  useEffect(() => {
    async function getStackFromDB() {
      const stack = await getStack(stackId);
      console.log(stack);
      setStack(stack);
    }

    getStackFromDB();
  }, [stackId]);

  const onCloseAddCardModal = () => {
    setOpenAddCard(false);
  };

  const saveNewStack = () =>{

  }

  return (
    <div>
      <div>
        <p
          className="cursor-pointer underline underline-offset-3
        decoration-pink-500/50 dark:decoration-pink-500/60 hover:decoration-wavy active:decoration-wavy"
          onClick={goBack}
        >
          Return back to stack list
        </p>
      </div>
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
    </div>
  );
}
