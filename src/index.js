import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './storeContext';


let renderEntireTree = (state) => {

   ReactDOM.render(
      <BrowserRouter>
         <StoreContext.Provider value={store}>
            {/* <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} /> */}
            <App  />
         </StoreContext.Provider>
      </BrowserRouter>, document.getElementById('root'));
}
renderEntireTree(store.getState());

store.subscribe(renderEntireTree);