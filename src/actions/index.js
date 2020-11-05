import {ROOM_TYPE} from './types';

export const changeRoomType = (roomType) => ({
    type:ROOM_TYPE, 
    payload: {
        roomType : ""
    }
});
