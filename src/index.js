import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";
import App from "./components/App";
import reducer from "./reducers";
import "./styles/index.scss";

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["auth"],
};

const pReducer = persistReducer(persistConfig, reducer);

const composeEnancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(pReducer, composeEnancers(applyMiddleware(thunk)));

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App></App>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
