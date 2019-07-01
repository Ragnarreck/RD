import { Dispatch } from 'redux';
import { logoutActions } from './types';

export const logoutAction = () => (dispatch: Dispatch) => logoutActions.success.call();
