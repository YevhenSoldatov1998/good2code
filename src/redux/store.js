import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import {articleReducer} from "./articleReducer";

const reducers = combineReducers({
    article: articleReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunk)
));
