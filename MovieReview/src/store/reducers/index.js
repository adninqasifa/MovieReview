import {combineReducers} from 'redux';
import userReducer from './userReducer';
import listReducer from './listReducer';
import detailsReducer from './detailsReducer';
import formStarReducer from './formStarReducer';

export default combineReducers({
  user: userReducer,
  listed: listReducer,
  details: detailsReducer,
  formStar: formStarReducer,
});
