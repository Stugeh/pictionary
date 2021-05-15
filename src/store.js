import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

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
    composeWithDevTools(),
);

export default Store;
