import { combineReducers } from 'redux'
import userReducer from './user'
import profile from './profile'
import address from './address'

export default combineReducers({
  userReducer: userReducer,
  profile: profile,
  address: address
})


