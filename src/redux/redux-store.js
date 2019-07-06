import { combineReducers, createStore, applyMiddleware } from 'redux';
import usersReducer from './user-reducer';
import reportReduser from './report/report-reducer';
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


let reducers = combineReducers({
    usersPage: usersReducer,
    reportPage: reportReduser,
});

let store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)));

window.store = store;

export default store;
