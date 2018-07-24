/**
 * Action Types
 */

export const INITIALIZED = 'INITIALIZED';
export const ROOT_CHANGED = 'ROOT_CHANGED';

/**
 * Action Creators
 */

export const changeAppRoot = root => ({
  type: 'ROOT_CHANGED',
  root,
});
