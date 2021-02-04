import {combineReducers} from 'redux';
import navbarReducer from './navbarReducer';

const rootReducer = combineReducers({
    activeNav: navbarReducer,
})

export default rootReducer;