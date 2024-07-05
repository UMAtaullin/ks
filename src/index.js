import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/state'

const rerenderTree = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
        dispatch={store.dispatch.bind(store)}
        // changePost={store.changePost.bind(store)}
        // addPost={store.addPost.bind(store)}
        profilePage={store.getState().profilePage} 
        messagesPage={store.getState().messagesPage} />
      </BrowserRouter>
    </React.StrictMode>
  );
} 

rerenderTree()

store.subscribe(rerenderTree)

reportWebVitals();
