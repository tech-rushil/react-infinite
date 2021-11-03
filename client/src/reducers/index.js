import {combineReducers} from 'redux';
import jwtReducer from './jwt';

const allReducers = combineReducers({
    jwtData : jwtReducer
});

export default allReducers;