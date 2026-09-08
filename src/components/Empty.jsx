import { FolderSearch } from "lucide-react";
import Button from "./Button";
import { useState } from "react";
import { addStack } from "../db/database";
import AddStackModal from "./AddStackModal";

export default function Empty({ setStacks }) {
  const [openModal, setOpenModal] = useState(false);

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
    <div className="mt-20 flex flex-col justify-center items-center gap-2">
      <div className="pt-1 pb-1 pl-2 pr-2 bg-gray-100/50 rounded-lg">
        <FolderSearch className="w-[15px] text-black" />
      </div>
      <p className="mt-0 font-medium">No stack yet</p>
      <div className="mt-3 mb-1">
        <p className="text-sm mt-0">Create a stack of cards now.</p>
      </div>
      <Button variant={"primary"} click={addNewStack}>
        Add a stack
      </Button>
      <AddStackModal
        openModal={openModal}
        onCloseModal={onCloseModal}
        saveNewStack={saveNewStack}
      />
    </div>
  );
}
