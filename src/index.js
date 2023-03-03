import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import Data from './redux/combine'
import thunk from 'redux-thunk'; 
import App from './App';


const store = createStore(Data, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
   <Provider  store={store}>
        <App />
    </Provider> 
  </React.StrictMode>
  ,
  document.getElementById('root')
);
