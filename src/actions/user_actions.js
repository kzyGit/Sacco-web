import { userService } from '../services'
import { history } from '../helpers'



export const userActions = {
    login,
    logout
}

function login(username, password) {
    return dispatch => {
        let apiEndpoint = 'login/';
        let payload = {
            username: username,
            password: password
        }

        userService.post(apiEndpoint, payload)
            .then((responce) => {
                if (!responce.data){
                    alert("Invalid login credentials"); 
                }
                else {
                    localStorage.setItem('token', responce.data.token);
                    localStorage.setItem('auth', true);
                    localStorage.setItem('user', username);
                    localStorage.setItem('role', responce.data.role);
                    dispatch(setUserDetails(responce.data));
                    alert("Successful login"); 
                    
                    if (responce.data.role === 'admin'){
                        history.push('/admin_dashboard');
                    }
                    else {
                        history.push('/dashboard');
                    }
                    
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

function logout(){
    return dispatch => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        dispatch(logoutUser());
        history.push('/');
    }
}

export function setUserDetails(user){
      return{
          type: "LOGIN_SUCCESS",
          auth: user.auth,
          token: user.token
      }
}
export function logoutUser(){
      return{
          type: "LOGOUT_SUCCESS",
          auth: false,
          token: ''
      }
}


