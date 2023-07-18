import types from '../types';

const INITIAL_STATE = {
  loginKey: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_KEY:
      return {
        ...state,
        loginKey: action.loginKey,
      };
    case types.REVERT_APP:
      return {
        ...state,
        loginKey: '',
      };
    default:
      return state;
  }
};
