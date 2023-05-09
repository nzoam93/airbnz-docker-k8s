import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import listingsReducer from './listings';
import reservationsReducer from './reservations';
import reviewsReducer from './reviews';
import sessionReducer from './session';

//root reducer is a combined reducer of every other reducer
const rootReducer = combineReducers({
    session: sessionReducer,
    listings: listingsReducer,
    reservations: reservationsReducer,
    reviews: reviewsReducer
})

//defines what will be applied as the middleware
let enhancer;
if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

//configures the store
const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

//this function is used by index.js entry file in order to define the Redux store onto the React application
export default configureStore
