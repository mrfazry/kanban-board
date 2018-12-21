import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
