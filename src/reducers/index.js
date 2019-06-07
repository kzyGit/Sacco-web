import { combineReducers } from 'redux';
import { authentication } from './auth_reducer';
import { userLoan, userLoanRepayment, userSavings, users } from './userLoan'
// import { users } from './user_reducer'

const rootReducer = combineReducers({
    authentication,
    userLoan,
    userLoanRepayment,
    userSavings,
    users
});
export default rootReducer;