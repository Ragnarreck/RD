import { logoutActions } from './types';

const initialState = {
  token: null
};

const reducers = {
  [logoutActions.success.name]: () => ({
    token: null
  })
};
