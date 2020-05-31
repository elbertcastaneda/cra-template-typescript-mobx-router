import { action, observable } from "mobx";
import DummyService from "../services/dummy/dummyService";
import { GetTodo } from "../services/dummy/dto/getTodo";

class DummyStore {
  @observable dummyText: string = "Dumm Dumm";
  @observable todo: GetTodo = { completed: false, id: 0, title: "", userId: 0 };

  @action
  update(dummText: string) {
    this.dummyText = dummText;
  }
  async getTodo() {
    const result = await DummyService.get();
    console.log(result);
    this.todo = result;
  }
}

export default DummyStore;
