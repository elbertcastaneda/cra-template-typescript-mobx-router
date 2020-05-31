import DummyStore from "./dummyStore";

export default function initializeStores() {
  return {
    dummyStore: new DummyStore(),
  };
}
