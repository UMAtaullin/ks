import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import state, { addPost, changePost, subscribe } from './redux/state'

export const rerenderTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
        changePost={changePost}
        addPost={addPost}
        profilePage={state.profilePage} 
        messagesPage={state.messagesPage} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderTree(state)

subscribe(rerenderTree)

reportWebVitals();
