const DB_NAME = "FlashcardDB";
const DB_VERSION = 1;
const STORE_NAME = "stacks";
let DB = undefined;
console.log("once")
function initDB() {
  if (!DB) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = (e) => reject(e.target.error);
      request.onsuccess = (e) => {
        console.log("heheh")
        DB = e.target.result;
      };

      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, {
            keyPath: "id",
            autoIncrement: true,
          });
        }
      };
    });
  }
}

initDB();

export function getStacks() {
  return new Promise((resolve, reject) => {
    const tx = DB.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = (e) => reject(e.target.error);
  });
}
