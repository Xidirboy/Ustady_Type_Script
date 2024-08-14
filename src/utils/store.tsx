import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import {thunk} from 'redux-thunk'; // `thunk` to'g'ri import qilingan
import rootReducer from './reducers.tsx'; // Sizning rootReducer'ni import qiling

// Redux holati uchun interfeys
export interface AppState {
  loading: boolean;
  user: object;
  auth_modal: boolean;
}

// Redux store'ini yaratish uchun funksiya
const configureStore = (initialState: AppState = {
  loading: false,
  user: {},
  auth_modal: false,
}): Store<AppState, AnyAction> => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export default configureStore;
