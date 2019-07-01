import { handleActions } from 'redux-actions';
import { startRequest, successRequest, errorRequest } from './report-actions'

const initialState = {
    isLoading: false,
    isError: false,
    error: '',
    data: {
        dates: {},
        sourcesList: [],
        statusesList: [],
        sum: []
    },
}

const reportReducer = handleActions(
    {
        [startRequest]: (state) => ({ ...state, isLoading: true }),
        [successRequest]: (state, { payload }) => ({ ...state, isLoading: false, isError: false, data: payload }),
        [errorRequest]: (state, { payload }) => ({ ...state, isLoading: false, isError: true, error: payload })
    },
    initialState
)

export default reportReducer;