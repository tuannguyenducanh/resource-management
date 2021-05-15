import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import App from "./App.js";
import { PersistGate } from "redux-persist/integration/react";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
