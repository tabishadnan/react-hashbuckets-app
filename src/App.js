import * as React from "react";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AppRouters from "./routers/AppRouters"; 
import AppReducer from "./store/AppReducer";
import "./App.css";

const rootReducer = combineReducers({
  appreducer: AppReducer,
});

const Store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={Store}>
      <AppRouters />
    </Provider>
  );
}

export default App;