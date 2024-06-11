import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

let postData = [
  { id: 1, message: 'Hi, it is my first post', like: 5 },
  { id: 2, message: 'That is what is new in my life today', like: 14 },
  { id: 3, message: 'Thanks a lot', like: 117 },
]

let dialogData = [
  { id: 1, name: 'Земфира' },
  { id: 2, name: 'Мансур' },
  { id: 3, name: 'Раушания' },
]
let messageData = [
  { id: 1, message: 'Я приеду в понедельник в 4 утра' },
  { id: 2, message: 'Ничего не делала, но очень устала' },
  { id: 3, message: 'Без понятия что сказать' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={postData} names={dialogData} messages={messageData} />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
