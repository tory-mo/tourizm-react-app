import {combineReducers, createStore} from 'redux';
import offerReducer from './offer-reducer';
import registrationReducer from './registration-reducer';

let reducers = combineReducers({
    registrationPage: registrationReducer,
    offerPage: offerReducer,
});

let store = createStore(reducers);

export default store;