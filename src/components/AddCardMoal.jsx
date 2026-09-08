import Modal from "./Modal";
import Button from "./Button";

export default function AddCardModal({
  openModal,
  onCloseModal,
  saveNewStack,
}) {
  console.log("openModal", openModal);
  return (
    <Modal open={openModal} close={onCloseModal}>
      <p className="mt-0 mb-10 text-lg font-semibold dark:text-white!">
        Create a new card
      </p>
      <form action={saveNewStack}>
        <div>
          <label htmlFor="name" className="dark:text-white!">
            Prompt
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
        </div>

        <div>
          <label htmlFor="name" className="dark:text-white!">
            Answer
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
        </div>
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
