import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store'
import { Provider } from './storeContext'

const rerenderTree = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
        <App 
        // store={store}
        />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
} 

rerenderTree()

store.subscribe(rerenderTree)

reportWebVitals();
