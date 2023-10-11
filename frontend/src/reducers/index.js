import { combineReducers } from 'redux';

const initialState = {
  login: [],
  errorMessage: null,
  successMessage: null,
  designations: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: action.payload,
      };
    case 'ADMIN_DATA': {
      return {
        ...state,
        designations: action.payload,
      };
    }
    case 'SUCCESS_MESSAGE':
      return {
        ...state,
        successMessage: action.payload,
      };
    case 'ERROR_MESSAGE':
      console.log('first');
      return {
        ...state,
        errorMessage: action.payload,
      };
    case 'RESET_SUCCESS_MESSAGE':
      return {
        ...state,
        successMessage: null,
      };
    case 'RESET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
};
export default combineReducers({
  reducer: reducers,
});
