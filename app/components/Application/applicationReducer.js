import {combineReducers} from 'redux';
import {GET_EMPLOYEES,GET_EMPLOYEES_FAIL,GET_EMPLOYEES_SUCCESS,UPDATE_SORT} from './applicationActions';

function employees(state = [], action = null) {
    switch(action.type) {
        case GET_EMPLOYEES:
            return [];
        case GET_EMPLOYEES_SUCCESS:
            return action.employees;
        default:
            return state;
    }
}

function loading(state = {employees:false}, action = null) {
    switch(action.type) {
        case GET_EMPLOYEES:
            return {employees:true};
        case GET_EMPLOYEES_FAIL:
        case GET_EMPLOYEES_SUCCESS:
            return {employees:false};
        default:
            return state;
    }
}

function sort(state = {field: null, asc:true}, action = null) {
    switch(action.type) {
        case UPDATE_SORT:
            var fieldsMatch = state.field === action.field;
            return {
                field:  (fieldsMatch && !state.asc) ? null : action.field,
                asc:    !fieldsMatch
            };
        default:
            return state;
    }
}

const application = combineReducers({
    employees, loading, sort
});
export default application;
