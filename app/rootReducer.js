import {combineReducers} from 'redux';
import application from './components/Application/applicationReducer'

const rootReducer = combineReducers({
    application
});
export default rootReducer;