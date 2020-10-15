import React from 'react';
import game from './game.png';
import nowaste from './nowaste.ppsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <a href={nowaste} download>
          <img src={game}></img>
          <p>Click here on on the image to download the .ppsx file to start the game.</p>
          <p>The game requires microsoft office to be installed.</p>
        </a>
      </section>
    </div>
  );
}

export default App;
