import logo from "./logo.svg";
import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoListContainer />
        <TodoFormContainer />

        {/* state는 obj기 때문에 문자열로 변환해서 state를 출력
        {JSON.stringify(state)} */}
      </header>
    </div>
  );
}

export default App;
