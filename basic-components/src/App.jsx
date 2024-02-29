// import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   )
// }

// export default App

import { Component } from "react";
import Movies from "./Movies";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Movies />
        <Movies />
        <Movies />
        <Movies />
      </div>
    );
  }
}
export default App;
