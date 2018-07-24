import * as navigation from './navigation';
/**
 * Dispatch the Action Creators
 */

export const appInitialized = () => {
  // return async (dispatch, getState) => {
  //   dispatch(navigation.changeAppRoot('login'));
  // };
  return async (dispatch, getState) => {
    dispatch(navigation.changeAppRoot('login'));
  };
};

export const login = () => {
  return async (dispatch, getState) => {
    // login logic would go here, and when it's done, we switch app roots
    dispatch(navigation.changeAppRoot('after-login'));
  };
};
