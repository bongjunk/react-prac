import TodoFormContainer from "../containers/TodoFormContainers";
import TodoListContainer from "../containers/TodoListContainer";

export default function Todos() {
  return (
    <div>
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  );
}
