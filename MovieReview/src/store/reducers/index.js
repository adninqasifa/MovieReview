import {combineReducers} from 'redux'
import userReducer from './userReducer'
import listReducer from './listReducer'
import detailsReducer from './detailsReducer'

export default combineReducers({
  user: userReducer,
  listed: listReducer,
  details: detailsReducer,
})