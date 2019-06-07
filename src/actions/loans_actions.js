import { userService } from '../services'
// action types
export const USER_LOAN_SUCCESS = 'LOAD_LOAN_SUCCESS';
export const USER_LOAN_FAIL = 'LOAD_LOAN_FAIL';
export const USER_LOAN_REPAYMENT_SUCCESS = 'USER_LOAN_REPAYMENT_SUCCESS'
export const USER_LOAN_REPAYMENT_FAIL = 'USER_LOAN_REPAYMENT_FAIL'
export const USER_SAVINGS_SUCCESS = 'USER_SAVINGS_SUCCESS'
export const USER_SAVINGS_FAIL = 'USER_SAVINGS__FAIL'
export const USERS_SUCCESS = 'USERS_SUCCESS'
export const USERS_FAIL = 'USERS_FAIL'
export const ADD_SAVINGS_SUCCESS = 'ADD_SAVINGS_SUCCESS'
export const ADD_SAVINGS_FAIL = 'ADD_SAVINGS_FAIL'

// action creator
export const usersSuccess = users => ({
    type: USERS_SUCCESS,
    payload: users,
});

export const usersFail = users => ({
    type: USERS_FAIL,
    payload: users,
});

export const addUserSavingsSuccess = addsavings => ({
    type: ADD_SAVINGS_SUCCESS,
    payload: addsavings,
});

export const addUserSavingsFail = addsavings => ({
    type: ADD_SAVINGS_FAIL,
    payload: addsavings,
});
export const loadUsers = () =>{
    return dispatch => {
        let apiEndpoint = `users/`;
        userService.get(apiEndpoint)
            .then((response) => {
                dispatch(usersSuccess(response.data));
            })
            .catch((error) => {
                dispatch(usersFail(error));
            })
    }
}
// action creator
export const userLoanSuccess = userLoan => ({
    type: USER_LOAN_SUCCESS,
    payload: userLoan,
});

export const userLoanFail = userLoan => ({
    type: USER_LOAN_FAIL,
    payload: userLoan,
});

export const userLoanRepaymentSuccess = userLoanRepayment => ({
    type: USER_LOAN_REPAYMENT_SUCCESS,
    payload: userLoanRepayment,
});

export const userLoanRepaymentFail = userLoanRepayment => ({
    type: USER_LOAN_REPAYMENT_FAIL,
    payload: userLoanRepayment,
});

export const userSavingsSuccess = userSavings => ({
    type: USER_SAVINGS_SUCCESS,
    payload: userSavings,
});

export const userSavingsFail = userSavings => ({
    type: USER_SAVINGS_FAIL,
    payload: userSavings,
});


export const loadUserLoan = () => {
    return dispatch => {
        let apiEndpoint = 'loans/';
        userService.get(apiEndpoint)
            .then((response) => {
                dispatch(userLoanSuccess(response.data));
            })
            .catch((error) => {
                dispatch(userLoanFail(error));
            })
    }
}

export const loadLoanRepayment = (id) => {
    return dispatch => {
        let apiEndpoint = `repayment/${id}/`;
        userService.get(apiEndpoint)
            .then((response) => {
                dispatch(userLoanRepaymentSuccess(response.data));
            })
            .catch((error) => {
                dispatch(userLoanRepaymentFail(error));
            })
    }
}

export const loadUserSavings = () =>{
    return dispatch => {
        let apiEndpoint = `savings/`;
        userService.get(apiEndpoint)
            .then((response) => {
                dispatch(userSavingsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(userSavingsFail(error));
            })
    }
}

export const addUserSavings = () =>{
    return dispatch => {
        let apiEndpoint = `savings/`;
        userService.post(apiEndpoint)
            .then((response) => {
                dispatch(addUserSavingsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(addUserSavingsFail(error));
            })
    }
}