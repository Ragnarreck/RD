import R from 'ramda';

const ASYNC = [
  { name: 'request', postfix: 'REQUEST', action: (type: string) => (payload: any) => ({ type, payload }) },
  { name: 'success', postfix: 'SUCCESS', action: (type: string) => (payload: any) => ({ type, payload }) },
  { name: 'failure', postfix: 'FAILURE', action: (type: string) => (payload: any) => ({ type, payload }) }
];

interface Actions {
  request: {
    name: string;
    call: any;
  };
  success: {
    name: string;
    call: any;
  };
  failure: {
    name: string;
    call: any;
  };
}

interface Action {
  type: string;
  payload: object;
}

export const createAsyncActions = (type: string): Actions => ASYNC.reduce((acc, it) => ({
  ...acc,
  [it.name]: {
    name: `${type}_${it.postfix}`,
    call: it.action(`${type}_${it.postfix}`),
  }
}), {} as Actions);

export const createReducer = (initialState: object, actionHandlers: object) => (state = initialState, action: Action) => {
  const handler = R.prop(action.type, actionHandlers);
  return handler ? handler(state, action) : state;
};
