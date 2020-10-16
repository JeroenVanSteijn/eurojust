import React from 'react';
import game from './game.png';
import nowaste from './nowaste.ppsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <a href={nowaste} download>
          <h1>
            Are you ready to enter the Coordination Center and lead an Action Day?
          </h1>
          <img alt="The Eurojust game" src={game}></img>
          <div>
          <p>Click here on on the image to download the .ppsx file to start the game.</p>
          <p>The game requires microsoft office to be installed.</p>
          <p>Good luck cracking the case!</p>
          <p><i>Tip: for optimal user experience, it is advised to play the game (downloading is required) on your computer/laptop. The file may be too large for smartphones.</i></p>
          </div>
        </a>
      </section>
    </div>
  );
}

export default App;
