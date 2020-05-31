import { GetTodo } from "./dto/getTodo";
import http from "../httpService";

class DummyService {
  public async get(): Promise<GetTodo> {
    let result = await http.get("todos/1", {});
    return result.data;
  }
}

export default new DummyService();
