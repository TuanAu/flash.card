import { FolderSearch } from "lucide-react";
import Modal from "./Modal";
import { useState } from "react";

export default function Empty() {
  const [openModal, setOpenModal] = useState(false);

  const addNewStack = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
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
      <button
        className="bg-black pt-1 pb-1 pl-2 pr-2 rounded-lg text-white cursor-pointer 
        active:bg-linear-to-tr active:from-indigo-600 active:to-indigo-950 active:from-15% active:to-75%
        transition duration-800"
        onClick={addNewStack}
      >
        Create a stack
      </button>
      <Modal open={openModal} close={onCloseModal}>
        <p
          className="mt-0 font-semibold
          bg-gradient-to-r from-violet-500 dark:from-violet-400 via-violet-700 to-indigo-500 from-15% via-50% to-90%
          bg-clip-text text-transparent!
          dark:text-white!"
        >
          Create a new stack
        </p>
      </Modal>
    </div>
  );
}
