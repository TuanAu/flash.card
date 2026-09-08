import Button from "./Button";
import AddStackModal from "./AddStackModal";
import { useState } from "react";
import { addStack } from "../db/database";

export default function Stacks({ stacks, setStacks, selectStack }) {
  const [openModal, setOpenModal] = useState(false);
  //   const stackColors = [
  //     " from-orange-600 via-amber-500 to-amber-400 ",
  //     " from-violet-700 via-purple-500 to-fuchsia-400 ",
  //     " from-neutral-800 via-indigo-800 to-indigo-700 ",
  //     " from-blue-900 via-sky-600 to-sky-500 ",
  //   ];
  // // from-neutral-900 to-indigo-800
  //   const stackColorsReverse = [...stackColors].reverse();

  //   const stackColorsPalete = stackColors.concat(stackColorsReverse);

  const addNewStack = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const saveNewStack = (data) => {
    const stackName = data.get("name");
    addStack(stackName).then((stackKey) =>
      setStacks((stacks) => [...stacks, { id: stackKey, name: stackName }]),
    );
    setOpenModal(false);
  };
  return (
    <div className="w-full">
      <p className="font-medium font-semibold text-center mt-10 mb-10">
        Flash card stacks
      </p>
      <div className="w-full flex justify-center">
        <div
          className="flex flex-wrap justify-start max-[400px]:justify-center
        gap-8 max-[700px]:gap-9 max-[1000px]:gap-9 w-full max-w-2xl"
        >
          {stacks.map((stack) => (
            <div
              className={`bg-red-100 w-[9rem] h-[10rem]
              flex justify-center items-center p-3 rounded-xl
              cursor-pointer
              bg-linear-to-bl 
              from-neutral-900 to-indigo-800
              from-10% via-70% to-90%
              hover:shadow-md shadow-indigo-500/50`}
              onClick={() => selectStack(stack.id)}
            >
              <p className="w-full mt-0 text-lg line-clamp-4 hyphens-auto break-words text-white! font-medium">
                {stack.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-fit mt-13">
        <Button variant={"primary"} click={addNewStack}>
          Add more stack
        </Button>
        <AddStackModal
          openModal={openModal}
          onCloseModal={onCloseModal}
          saveNewStack={saveNewStack}
        />
      </div>
    </div>
  );
}
