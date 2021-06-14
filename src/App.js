import "./App.css";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Users from "./Users/containers/Users";
import Message from './Message/Message'
import reduxStore from "./reduxStore";

const store = createStore(reduxStore, applyMiddleware(thunk));

function App() {
  return (
    <div>
      <Provider store={store}>
        <Message />
        <Router>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
