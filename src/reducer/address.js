import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE ={
  request: false,
  success: false,
  error: false,
  user:{}
};

const address = (state = INITIAL_STATE, action={}) =>{
  switch (action.type) {
    case actionTypes.CREATE_ADDRESS_REQUEST:
      return {
        ...state,
        user: action,
        request: true,
        success: false,
        error: false,
        message: ''
      };
      case actionTypes.CREATE_ADDRESS_SUCCESS:
      debugger
      return {
       ...state,
        user: action.payload.response,
        success: true,
        request: false,
        error: false,
        message: 'Welcome! you have signed in successfully'
      };
      case actionTypes.CREATE_ADDRESS_ERROR:
      debugger
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




export default address;