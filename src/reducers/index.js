import { combineReducers } from 'redux';
import { authentication } from './auth_reducer';
import { userLoan, userLoanRepayment, userSavings, users, addSavings, userSavingsUpdate } from './userLoan'
// import { users } from './user_reducer'

const rootReducer = combineReducers({
    authentication,
    userLoan,
    userLoanRepayment,
    userSavings,
    users,
    addSavings,
    userSavingsUpdate
});
export default rootReducer;