import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';

// thunk = lets us dispatch() functions (http://rackt.github.io/redux/docs/advanced/AsyncActions.html)
// createLogger = neat middleware that logs actions
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed:true})
)(createStore);

export default function configureStore() {
    return createStoreWithMiddleware(rootReducer);
}