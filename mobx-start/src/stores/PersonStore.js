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

  constructor(rootStore) {
    makeObservable(this);

    this.rootStore = rootStore;
  }

  @action
  plus() {
    this.age++;
    this.rootStore.todoStore.todos = [];
  }

  @action
  testAction() {
    this.age = 40;
    this.name = "kim";
  }
}
