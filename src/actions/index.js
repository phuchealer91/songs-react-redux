import * as types from '../constants/actionType';
// Actiion creator
export const selectSong = song => {
    // Return an action
    return {
        type: types.SONG_SELECTED,
        payload: song
    };
};

