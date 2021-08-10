import {applyMiddleware, createStore} from 'redux';
import rootReducer from './Reducer';

const configStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState);

  return store;
};

export const store = configStore();
