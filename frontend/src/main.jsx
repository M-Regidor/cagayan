import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import './index.css';
import { restoreSession } from './utils/csrf';


const store = configureStore()

if (import.meta.env.MODE !== 'production') {
  window.store = store;
}
restoreSession()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
