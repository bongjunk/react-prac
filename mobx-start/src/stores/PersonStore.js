import { observable, makeObservable, computed, action } from "mobx";

export default class PersonStore {
  @observable
  name = "Bong";

  @observable
  age = 29;

  @computed
  get age10() {
    return Math.floor(this.age / 10) * 10;
  }

  constructor() {
    makeObservable(this);
  }

  plus() {
    this.age++;
  }

  @action
  testAction() {
    this.age = 40;
    this.name = "kim";
  }
}
