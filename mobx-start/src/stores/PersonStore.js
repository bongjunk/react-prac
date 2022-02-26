import { observable, makeObservable } from "mobx";

export default class PersonStore {
  @observable
  name = "Bong";

  @observable
  age = 29;

  constructor() {
    makeObservable(this);
  }
  plus() {
    this.age++;
  }
}
