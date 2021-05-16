import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import multiplayerReducer from './reducers/multiplayerReducer';
import singleplayerReducer from './reducers/singleplayerReducer';
import popupReducer from './reducers/popupReducer';
import menuReducer from './reducers/menuReducer';

const reducer = combineReducers({
  multiplayer: multiplayerReducer,
  singleplayer: singleplayerReducer,
  popup: popupReducer,
  menu: menuReducer,
});

const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default Store;
