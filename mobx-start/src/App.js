import logo from "./logo.svg";
import "./App.css";
import autobind from "autobind-decorator";
import observer from "autobind-decorator";
import PersonContext from "./contexts/PersonContext";
import React, { useContext } from "react";

// function App() {
//   const personStore = useContext(PersonContext);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{personStore.age}</p>
//         <p>{personStore.name}</p>
//         <p>
//           <button onClick={click}>plus</button>
//         </p>
//       </header>
//     </div>
//   );

//   function click() {
//     personStore.plus();
//   }
// }

@observer
class App extends React.Component {
  static contextType = PersonContext;

  render() {
    const personStore = this.context;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{personStore.age}</p>
          <p>{personStore.name}</p>
          <p>
            <button onClick={this.click}>plus</button>
          </p>
        </header>
      </div>
    );
  }

  @autobind
  click() {
    const personStore = this.context;
    personStore.plus();
  }
}

export default App;
