import * as actionTypes from './actionTypes'
import * as API from '../api/user'
//get all user details


export const GetSignInUserRequest = () => ({
    type: actionTypes.GET_SIGNIN_USER_REQUEST
})

export const GetSignInUserSuccess = (response) => ({
    type: actionTypes.GET_SIGNIN_USER_SUCCESS,
    payload: {
        response,
    }
})

export const GetSignInUserError = (error) => ({
    type: actionTypes.GET_SIGNIN_USER_ERROR,
    payload: {
        error
    }
})

export const GetSignInUserAction = (data) => {
    return dispatch => {
        dispatch(GetSignInUserRequest())
        return API.getSignInUser(data)
            .then(response => {
                dispatch(GetSignInUserSuccess(response.data))
            })
            .catch(error => {
                dispatch(GetSignInUserError(error.response !== undefined ? error.response.data.error : "Internet Connection Error"))
            })
    }
}


export const GetAllUserListRequest = () => ({
    type: actionTypes.GET_ALL_USER_LIST_REQUEST
})

export const GetAllUserListSuccess = (response) => ({
    type: actionTypes.GET_ALL_USER_LIST_SUCCESS,
    payload: {
        response,
    }
})

export const GetAllUserListError = (error) => ({
    type: actionTypes.GET_ALL_USER_LIST_ERROR,
    payload: {
        error
    }
})

export const GetAllUserListAction = (data) => {
    return dispatch => {
        dispatch(GetAllUserListRequest())
        return API.getAllUserList(data)
            .then(response => {
                dispatch(GetAllUserListSuccess(response));
            })
            .catch(error => {
                dispatch(GetAllUserListError(error.response !== undefined ? error.response.data.error : "Internet Connection Error"))
            })
    }
}



export const signInUserRequest = () => ({
    type: actionTypes.SIGNIN_USER_REQUEST
})

export const signInUserSuccess = (response) => ({
    type: actionTypes.SIGNIN_USER_SUCCESS,
    payload: {
        response,
    }
})

export const signInUserError = (error) => ({
    type: actionTypes.SIGNIN_USER_ERROR,
    payload: {
        error
    }
})

export const signInUserAction = (data) => {
    return dispatch => {
        dispatch(signInUserRequest())
        return API.signInUser(data)
            .then(response => {
                debugger
                if(response && response.data ){
                  if(response.data){
                    let data ={
                        accessToken: response.headers["access-token"],
                        client: response.headers["client"],
                        expiry: response.headers["expiry"],
                        uid: response.headers["uid"],
                        tokenType: response.headers["token-type"],
                        accessToken: response.headers["access-token"]
                        }
                      localStorage.setItem('authentication', JSON.stringify(data));
                      dispatch(signInUserSuccess(response.data));
                  }
                }
            })
            .catch(error => {
                debugger
                let data = ''
                if (error.response.data.errors[0].length>0)
                    data = error.response.data.errors[0];
                dispatch(signInUserError(data));    
            })
    }

}

export const signUpUserRequest = () => ({
    type: actionTypes.SIGNUP_USER_REQUEST
})

export const signUpUserSuccess = (response) => ({
    type: actionTypes.SIGNUP_USER_SUCCESS,
    payload: {
        response,
    }
})

export const signUpUserError = (error) => ({
    type: actionTypes.SIGNUP_USER_ERROR,
    payload: {
        error
    }
})

export const signUpUserAction = (data) => {
    return dispatch => {
        dispatch(signUpUserRequest())
        return API.signUpUser(data)
            .then(response => {
                if(response && response.data ){
                    if(response.data){
                       let data ={
                        accessToken: response.headers["access-token"],
                        client: response.headers["client"],
                        expiry: response.headers["expiry"],
                        uid: response.headers["uid"],
                        tokenType: response.headers["token-type"],
                        accessToken: response.headers["access-token"]
                        }
                      localStorage.setItem('authentication', JSON.stringify(data));
                        dispatch(signUpUserSuccess(response.data.data));
                    }            
                }
            })
            .catch(error => {
                let data = ''
                if (error.response.data.errors && error.response.data.errors.full_messages[0].length)
                    data =error.response.data.errors.full_messages[0]
               dispatch(signUpUserError(data));
            })
    }
}



export const signOutUserRequest = () => ({
    type: actionTypes.SIGN_OUT_USER_REQUEST
})

export const signOutUserSuccess = (response) => ({
    type: actionTypes.SIGN_OUT_USER_SUCCESS,
    payload: {
        response,
    }
})

export const signOutUserError = (error) => ({
    type: actionTypes.SIGN_OUT_USER_ERROR,
    payload: {
        error
    }
})

export const signOutUserAction = (data) => {
    debugger
    return dispatch => {
        dispatch(signOutUserRequest())
        return API.signOutUser(data)
            .then(response => {
                debugger
                if(response && response.data ){
                    if(response.data){
                        localStorage.removeItem('authentication');
                        dispatch(signOutUserSuccess(response.data));
                    }            
                }
            })
            .catch(error => {
                debugger
               dispatch(signOutUserError(response.data.result));
            })
    }
}

