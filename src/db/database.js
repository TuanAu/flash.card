const DB_NAME = "FlashcardDB";
const DB_VERSION = 2;
const STACKS_STORE = "stacks";
const CARDS_STORE = "cards";

const dbPromise = new Promise((resolve, reject) => {
  const request = indexedDB.open(DB_NAME, DB_VERSION);
  request.onerror = (e) => reject(e.target.error);

  request.onsuccess = (e) => {
    resolve(e.target.result);
  };

  request.onupgradeneeded = (e) => {
    const db = e.target.result;
    if (!db.objectStoreNames.contains(STACKS_STORE)) {
      db.createObjectStore(STACKS_STORE, {
        keyPath: "id",
        autoIncrement: true,
      });
    }

    if (!db.objectStoreNames.contains(CARDS_STORE)) {
      const cardsStore = db.createObjectStore(CARDS_STORE, {
        keyPath: "id",
        autoIncrement: true,
      });

      cardsStore.createIndex("stackId", "stackId", { unique: false });
    }
  };
});

export function getStacks() {
  return dbPromise.then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STACKS_STORE, "readonly");
      const store = tx.objectStore(STACKS_STORE);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject(e.target.error);
    });
  });
}

export function addStack(name) {
  return dbPromise.then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STACKS_STORE, "readwrite");
      const store = tx.objectStore(STACKS_STORE);

      const newStack = {
        name: name,
      };

      const request = store.add(newStack);
      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject(e.target.error);
    });
  });
}

export function getStack(stackId) {
  return dbPromise.then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STACKS_STORE, "readonly");
      const store = tx.objectStore(STACKS_STORE);

      const request = store.get(stackId);

      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject(e.target.error);
    });
  });
}

export function getCards(stackId) {
  return dbPromise.then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(CARDS_STORE, "readonly");
      const store = tx.objectStore(CARDS_STORE);

      const index = store.index("stackId");
      const request = index.getAll(stackId);

      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject(e.target.error);
    });
  });
}

export function addCard(stackId, prompt, answer) {
  return dbPromise.then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(CARDS_STORE, "readwrite");
      const store = tx.objectStore(CARDS_STORE);

      const newCard = {
        stackId: stackId,
        prompt: prompt,
        answer: answer,
      };

      const request = store.add(newCard);
      request.onsuccess = () => resolve(request.result);
      request.onerror = (e) => reject(e.target.error);
    });
  });
}
