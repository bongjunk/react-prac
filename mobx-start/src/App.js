import logo from "./logo.svg";
import "./App.css";
import autobind from "autobind-decorator";
import observer from "autobind-decorator";
import PersonContext from "./contexts/PersonContext";
import React, { useContext } from "react";
import { action, computed, runInAction } from "mobx";

function App() {
  const personStore = useContext(PersonContext);

  const age10 = computed(() => {
    return Math.floor(personStore.age / 10) * 10;
  }).get();

  console.log("render", personStore.age, personStore.name);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {personStore.age}, {personStore.name}
        </p>
        <p>
          <button onClick={click}>plus</button>
        </p>
      </header>
    </div>
  );

  function click() {
    // personStore.plus();
    setTimeout(() => {
      runInAction(() => {
        personStore.age = 40;
        personStore.name = "kim";
      });
    }, 500);
  }
}

// @observer
// class App extends React.Component {
//   static contextType = PersonContext;

//   render() {
//     console.log("render");
//     const personStore = this.context;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{personStore.age10}</p>
//           <p>{personStore.name}</p>
//           <p>
//             <button onClick={this.click}>plus</button>
//           </p>
//         </header>
//       </div>
//     );
//   }

//   @autobind
//   click() {
//     const personStore = this.context;
//     personStore.plus();
//     console.log("click");
//   }
// }

export default observer(App);
