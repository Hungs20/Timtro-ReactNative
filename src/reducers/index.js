import {combineReducers} from 'redux';
import roomTypeReducer from './roomTypeReducer';

export default combineReducers({
  roomType:roomTypeReducer
});