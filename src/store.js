import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import gameReducer from './reducers/gameReducer';
import popupReducer from './reducers/popupReducer';
import setUpReducer from './reducers/setUpReducer';
import menuReducer from './reducers/menuReducer';

const reducer = combineReducers({
  game: gameReducer,
  popup: popupReducer,
  setup: setUpReducer,
  menu: menuReducer,
});

const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default Store;
