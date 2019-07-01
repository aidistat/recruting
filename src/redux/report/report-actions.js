import { createAction } from 'redux-actions'

export const startRequest = createAction('GET_REPORT_START');
export const successRequest = createAction('GET_REPORT_SUCCESS');
export const errorRequest = createAction('GET_REPORT_ERROR');

