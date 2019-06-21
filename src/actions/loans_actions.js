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
export const UPDATE_USER_SAVINGS_SUCCESS = 'UPDATE_USER_SAVINGS_SUCCESS'
export const UPDATE_USER_SAVINGS_FAIL = 'UPDATE_USER_SAVINGS_FAIL'
export const DELETE_USER_SAVINGS_SUCCESS = 'DELETE_USER_SAVINGS_SUCCESS'
export const DELETE_USER_SAVINGS_FAIL = 'DELETE_USER_SAVINGS_FAIL'
export const UPDATE_USER_LOAN_SUCCESS = 'UPDATE_USER_LOAN_SUCCESS'
export const UPDATE_USER_LOAN_FAIL = 'UPDATE_USER_LOAN_FAIL'
export const DELETE_USER_LOAN_SUCCESS = 'DELETE_USER_LOAN_SUCCESS'
export const DELETE_USER_LOAN_FAIL= 'DELETE_USER_LOAN_FAIL'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAIL = 'ADD_USER_FAIL'

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

export const updateUserSavingsSuccess = userSavingsUpdate => ({
    type: UPDATE_USER_SAVINGS_SUCCESS,
    payload: userSavingsUpdate,
})

export const updateUserSavingsFail = userSavingsUpdate => ({
    type: UPDATE_USER_SAVINGS_FAIL,
    payload: userSavingsUpdate,
})

export const deleteUserSavingSuccess = deleteUserSaving => ({
    type: DELETE_USER_SAVINGS_SUCCESS,
    payload: deleteUserSaving,
})

export const deleteUserSavingsFail = deleteUserSaving => ({
    type: DELETE_USER_SAVINGS_FAIL,
    payload: deleteUserSaving,
})

export const updateUserLoanSuccess = userLoanUpdate => ({
    type: UPDATE_USER_LOAN_SUCCESS,
    payload: userLoanUpdate,
})

export const updateUserLoanFail = userLoanUpdate => ({
    type: UPDATE_USER_LOAN_FAIL,
    payload: userLoanUpdate,
})

export const deleteUserLoanSuccess = deleteUserLoan => ({
    type: DELETE_USER_LOAN_SUCCESS,
    payload: deleteUserLoan,
})

export const deleteUserLoanFail = deleteUserLoan => ({
    type: DELETE_USER_LOAN_FAIL,
    payload: deleteUserLoan,
})


export const addNewUserSuccess = newUser => ({
    type: ADD_USER_SUCCESS,
    payload: newUser,
})

export const addNewUserFail = newUser => ({
    type: ADD_USER_FAIL,
    payload: newUser,
})


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


export const loadUserLoan = (id=false) => {
    return dispatch => {
        let apiEndpoint =  id? `loans/${id}/`: `loans/`;
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

export const loadUserSavings = (id=false) =>{
    return dispatch => {
        let apiEndpoint = id? `savings/${id}/`: `savings/`;
        console.log("*****", apiEndpoint)
        userService.get(apiEndpoint)
            .then((response) => {
                dispatch(userSavingsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(userSavingsFail(error));
            })
    }
}


export const addUserSavings = (id, amount) =>{
    return dispatch => {
        let apiEndpoint = `savings/${id}/`;
        let payload = {
            amount: amount
        }
        userService.auth_post(apiEndpoint, payload)
            .then((response) => {
                dispatch(addUserSavingsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(addUserSavingsFail(error));
            })
    }
}

export const updateUserSavings = (id, amount) =>{
    return dispatch => {
        let apiEndpoint = `single_saving/${id}/`;
        let payload = {
            amount: amount
        }
        userService.put(apiEndpoint, payload)
            .then((response) => {
                dispatch(updateUserSavingsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(updateUserSavingsFail(error));
            })
    }
}


export const deleteUserSavings = (id) =>{
    return dispatch => {
        let apiEndpoint = `single_saving/${id}/`;
        userService.deleteDetail(apiEndpoint)
            .then((response) => {
                dispatch(deleteUserSavingSuccess(response.data));
            })
            .catch((error) => {
                dispatch(deleteUserSavingsFail(error));
            })
    }
}

export const updateUserLoan = (id, amount) =>{
    return dispatch => {
        let apiEndpoint = `single_loan/${id}/`;
        let payload = {
            amount: amount
        }
        userService.put(apiEndpoint, payload)
            .then((response) => {
                dispatch(updateUserLoanSuccess(response.data));
            })
            .catch((error) => {
                dispatch(updateUserLoanFail(error));
            })
    }
}


export const deleteUserLoan = (id) =>{
    return dispatch => {
        let apiEndpoint = `single_loan/${id}/`;
        userService.deleteDetail(apiEndpoint)
            .then((response) => {
                dispatch(deleteUserLoanSuccess(response.data));
            })
            .catch((error) => {
                dispatch(deleteUserLoanFail(error));
            })
    }
}


export const addNewUser = (user) =>{
    return dispatch => {
        let apiEndpoint = `users/`;
        userService.auth_post(apiEndpoint, user)
            .then((response) => {
                dispatch(addNewUserSuccess(response.data));
            })
            .catch((error) => {
                console.log("***", error)
                dispatch(addNewUserFail(error));
            })
    }
}