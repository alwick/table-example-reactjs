import superagent from 'superagent';

export const GET_EMPLOYEES = "application.GET_EMPLOYEES";
export const GET_EMPLOYEES_SUCCESS = "application.GET_EMPLOYEES_SUCCESS";
export const GET_EMPLOYEES_FAIL = "application.GET_EMPLOYEES_FAIL";
export const UPDATE_SORT = "application.UPDATE_SORT";

export function onGetEmployees() {
    return (dispatch) => {
        dispatch(getEmployees());

        superagent.get('api/employees').end((err, res) => {
            console.log( "Got Response: " + res );
            if(!err) {
                dispatch(getEmployeesSuccess(res.body));
            }
            else {
                dispatch(getEmployeesFail("Could not load credits", res));
            }
        });
    };
}

function getEmployees() {
    return {
        type: GET_EMPLOYEES
    };
}

function getEmployeesSuccess(body) {
    return {
        type: GET_EMPLOYEES_SUCCESS,
        employees: body
    };
}

function getEmployeesFail(reason, result) {
    return {
        type: GET_EMPLOYEES_FAIL,
        reason: reason,
        error: result
    };
}

export function onUpdateSort( field ) {
    return {
        type: UPDATE_SORT,
        field: field
    };
}