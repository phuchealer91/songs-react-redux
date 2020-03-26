import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { selectSong } from '../actions/';
import * as actions from '../actions/index';
class SongList extends Component {
    onSelectSong = (song) => {
        this.props.selectSong(song);
}
    render() {
        const {songList} = this.props;
        const elementSongs = songList.map((song,index)=>{
            return <div className="item" key={index}>
               <div className="content">
                    {song.title}
               </div>
               <div className="right floated content">
                    <button 
                    className="ui button primary"
                    onClick={() => this.onSelectSong(song)}
                    >Select</button>
               </div>
            </div>
        })
        return (
            <div className="ui divided list">
                <h3>Song List</h3>
               {elementSongs}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        songList: state.songs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectSong: (song) => {
            dispatch(actions.selectSong(song));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SongList);