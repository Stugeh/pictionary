import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import multiplayerReducer from './reducers/multiplayerReducer';
import popupReducer from './reducers/popupReducer';
import menuReducer from './reducers/menuReducer';

const reducer = combineReducers({
  multiplayer: multiplayerReducer,
  popup: popupReducer,
  menu: menuReducer,
});

const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default Store;
