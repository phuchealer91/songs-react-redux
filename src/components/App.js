import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
function App() {
  return (
    <div className="ui container grid" style={{marginTop: '20px'}}>
     <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
        <h3>Details for: </h3>
          <SongDetail />
        </div>
     </div>
    </div>
  );
}

export default App;
