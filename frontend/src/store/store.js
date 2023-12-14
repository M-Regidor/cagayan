import {legacy_createStore, applyMiddleware, compose, combineReducers} from "redux"
import thunk from "redux-thunk"
import userReducer from "./userReducer";
import sessionReducer from "./sessionReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";
import cartItemsReducer from "./cartItem.Reducer";


const rootReducer = combineReducers({
    users: userReducer,
    session: sessionReducer,
    products: productReducer,
    reviews: reviewReducer,
    cartItems: cartItemsReducer
});

let enhancer;
if (import.meta.env.MODE === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


const configureStore = (preloadedState = {}) => {
    return legacy_createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore