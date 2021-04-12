import {combineReducers} from 'redux';

// Reducers
export const songsReducer = () => {
    return [
        {song: 'Bruises', artist: 'Chairlift', duration: '2:05'},
        {song: 'Recording 15', artist: 'Shannon Lay', duration: '3:15'},
        {song: "I Don't Love You", artist: 'My Chemical Romance', duration: '2:40'},
        {song: 'Viva La Vida', artist: 'Coldplay', duration: '3:00'},
        {song: 'Lost Boy', artist: 'Ruth B', duration: '2:50'}
    ];
}

export const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});