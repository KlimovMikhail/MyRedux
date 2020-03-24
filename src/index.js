import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {ButtonApp} from "./components/ButtonContainer";
import {store} from "./store"

ReactDOM.render(
  <Provider store={store}>
    <ButtonApp></ButtonApp>
  </Provider>,
  document.getElementById('root')
);

