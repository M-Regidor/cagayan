import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import './index.css';
import { restoreSession } from './utils/csrf';






const initializeApp = () => {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
    let initialState;

    if (currentUser) {
      initialState = {
        users: {
          [currentUser.id]: currentUser
        },
        session: {
          currentUserId: currentUser.id
        }
      }
    }
    
    
  
    const store = configureStore(initialState)

    if (import.meta.env.MODE !== 'production') {
      window.store = store;
    }
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    );
}



await restoreSession().then(initializeApp)
