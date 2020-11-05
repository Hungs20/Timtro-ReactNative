import {ROOM_TYPE} from '../actions/types';

const initialState = '';

export default function (state = initialState, action) {
  switch (action.type) {
    case ROOM_TYPE:
        return state = action.roomType;
    default:
      return state;
  }
}