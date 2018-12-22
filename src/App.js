import React, { Component } from "react";
import "./App.css";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Header />
            <Main />
            <Footer />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
