import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE ={
  request: false,
  success: false,
  error: false,
  user:{}
};

const userReducer = (state = INITIAL_STATE, action={}) =>{
  switch (action.type) {
    case actionTypes.SIGNUP_USER_REQUEST:
      return {
        ...state,
        user: action,
        request: true,
        success: false,
        error: false,
        message: ''
      };
    case actionTypes.SIGNUP_USER_SUCCESS:
      return {
       ...state,
        user: action.payload.response,
        success: true,
        request: false,
        error: false,
        message: ''
      };
    case actionTypes.SIGNUP_USER_ERROR:
    debugger
      return {
       ...state,
        user: {},
        error: true,
        request: false,
        success: false,
        message: action.payload.error,
      };

    case actionTypes.SIGNIN_USER_REQUEST:
      return {
        ...state,
        user: action,
        request: true,
        success: false,
        error: false,
        message: ''
      };
    case actionTypes.SIGNIN_USER_SUCCESS:
      return {
       ...state,
        user: action.payload.response.data,
        success: true,
        request: false,
        error: false,
        message: "Welcome! you have signed in successfully"
      };
    case actionTypes.SIGNIN_USER_ERROR:
      return {
       ...state,
        user: {},
        error: true,
        request: false,
        success: false,
        message: action.payload.error
      };

    case actionTypes.SIGN_OUT_USER_REQUEST:
      return {
        ...state,
        user: action,
        request: true,
        success: false,
        error: false,
        message: ''
      };
    case actionTypes.SIGN_OUT_USER_SUCCESS:
      return {
       ...state,
        user: action.payload.response.data,
        success: true,
        request: false,
        error: false,
        message: ''
      };
    case actionTypes.SIGN_OUT_USER_ERROR:
      return {
       ...state,
        user: action,
        error: true,
        request: false,
        success: false,
        message: ''
      };


    default:
      return state
  }
}

export default userReducer;