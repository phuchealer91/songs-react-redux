import * as types from '../constants/actionType';
const initialState = null;
const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SONG_SELECTED:
            return action.payload;
        default: 
            return state;
    }
};

export default myReducer;