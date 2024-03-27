import { combineReducers } from 'redux';

import menuReducer from './slices/menu';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

export const reducer = combineReducers({
  menu: menuReducer,
});
