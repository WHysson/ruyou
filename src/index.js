import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers/sendMessage'


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // create store
console.log(store)


store.subscribe(() => {             //subscriber
  console.log('subscribe', store.getState())
  let list = document.querySelector('ul')
  let listItem = document.createElement('li')
  listItem.innerHTML = "Собщение отправлено"
  list.appendChild(listItem)
  console.log(list)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




