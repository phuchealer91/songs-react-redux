import React, { Component } from 'react'
import { connect } from 'react-redux';
class SongDetail extends Component {
    render() {
        const { song } = this.props; 
        if(!song){
            return '';
        }
        return (
            <div>
                <ul>
                    <li>{song.title}</li>
                    <li>{song.duration}</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}
export default connect(mapStateToProps)(SongDetail);