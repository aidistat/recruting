import { handleActions } from 'redux-actions';
import { startRequest, successRequest, errorRequest } from './report-actions';

const initialState = {
  isReporting: true,
  isLoading: false,
  isError: false,
  error: '',
  data: {
    dates: {},
    sourcesList: [],
    statusesList: [],
    sum: {}
  }
};

const reportReducer = handleActions(
  {
    [startRequest]: state => ({
      ...state,
      isLoading: true,
      isReporting: false
    }),
    [successRequest]: (state, { payload }) => ({
      ...state,
      isReporting: true,
      isLoading: false,
      isError: false,
      data: payload
    }),
    [errorRequest]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      isError: true,
      error: payload
    })
  },
  initialState
);

export default reportReducer;
