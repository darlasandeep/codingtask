import React, { Component } from "react";
import Header from "./containers/Header/Header";
import Content from "./containers/Content/Content";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
