import Modal from "./Modal";
import Button from "./Button";

export default function AddStackModal({openModal, onCloseModal, saveNewStack}) {
  return (
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
          required
          placeholder="Micro-frontend"
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
  );
}
