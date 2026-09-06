import { FolderSearch } from "lucide-react";
import Modal from "./Modal";
import Button from "./Button";
import { useState } from "react";
import { addStack } from "../db/database";

export default function Empty({setStacks}) {
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
    <div className="flex flex-col justify-center items-center gap-2">
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
      <Modal open={openModal} close={onCloseModal}>
        <p className="mt-0 mb-10 text-lg font-semibold dark:text-white!">
          Create a new stack
        </p>
        <form action={saveNewStack}>
          <label htmlFor="name" className="dark:text-white!">
            Stack name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Machine Learning Final"
            className="block text-xs w-full h-10 border-1 border-solid p-2 mt-2 rounded-sm 
            text-gray-500 dark:text-gray-400"
          ></input>
          <div className="flex justify-end mt-5 gap-2">
            <Button click={onCloseModal}>Close</Button>
            <Button variant={"primary"} type="submit">
              Create
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
