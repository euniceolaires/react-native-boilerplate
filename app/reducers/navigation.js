import { ROOT_CHANGED } from '../actions/navigation';

const initialState = {
  root: undefined, // 'login' / 'after-login'

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ROOT_CHANGED:
      return {
        ...state,
        root: action.root,
      };

    default:
      return state;
  }
};
