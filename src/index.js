import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css'
import  favouritesReducer  from './components/reducers/favouritesSlice';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(favouritesReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}>
    <App />
  </Provider>);
