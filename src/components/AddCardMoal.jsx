import Modal from "./Modal";
import Button from "./Button";

export default function AddCardModal({
  openModal,
  onCloseModal,
  saveNewStack,
}) {
  return (
    <Modal open={openModal} close={onCloseModal}>
      <p className="mt-0 text-lg font-semibold dark:text-white!">
        Create a new card
      </p>
      <form action={saveNewStack}>
        <div className="mt-10 mb-5">
          <label htmlFor="name" className="dark:text-white!">
            Prompt
          </label>
          <textarea
            id="prompt"
            name="prompt"
            required
            placeholder="Back-propagation"
            className="block text-xs w-full h-10 border-1 border-solid p-2 mt-2 rounded-sm 
          text-gray-500 dark:text-gray-400"
          ></textarea>
        </div>

        <div className="mt-5 mb-10">
          <label htmlFor="name" className="dark:text-white!">
            Answer
          </label>
          <textarea
            id="answer"
            name="answer"
            rows="4"
            required
            placeholder="To update training weights"
            className="block text-xs w-full h-25 border-1 border-solid p-2 mt-2 rounded-sm 
          text-gray-500 dark:text-gray-400"
          ></textarea>
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
