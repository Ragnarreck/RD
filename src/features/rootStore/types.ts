import constants from './constants';
import { createAsyncActions } from '../../utils/helpers/redux';

export const logoutActions = createAsyncActions(constants.LOGOUT);
