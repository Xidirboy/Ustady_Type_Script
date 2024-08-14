import { combineReducers } from 'redux';

interface User {
  id?: string; // Agar id mavjud bo'lmasa, bu xususiyat optional
  [key: string]: any; // Boshqa xususiyatlarni qo'shish mumkin
}

interface ReducerType {
  loading: boolean;
  user: User; // user ob'ektining turi
  auth_modal: boolean;
}

const INITIAL_STATE: ReducerType = {
  loading: false,
  user: {},
  auth_modal: false,
};

// Reducer holati uchun interfeys
interface ReducerState {
  loading: boolean;
  user: object;
  auth_modal: boolean;
}

const loadingReducer = (state = false, action: any): boolean => {
  switch (action.type) {
    case "SET_LOADING":
      return action.payload;
    default:
      return state;
  }
};

const userReducer = (state = {}, action: any): object => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    default:
      return state;
  }
};

const authModalReducer = (state = false, action: any): boolean => {
  switch (action.type) {
    case "SET_AUTH_MODAL":
      return action.payload;
    default:
      return state;
  }
};

// Root reducer
const rootReducer = combineReducers({
  loading: loadingReducer,
  user: userReducer,
  auth_modal: authModalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
