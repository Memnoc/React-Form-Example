
import '../styles/styles.css';
import { useState } from 'react';

const Player = ({ firstName, lastName, userName, gameCount, imageUrl, deletePlayer, player }) => {
  const [showGameCount, setShowGameCount] = useState(false);

  const toggleGameCount = () => {
    setShowGameCount(!showGameCount);
  };
  return (
    <>
      <div className="player-card">
        <img className="player-image" src={imageUrl} alt={gameCount} />
        <div className="player-info">
          <h3 className="player-name">{firstName} {lastName}</h3>
          <p className="player-team">{userName}</p>
          <a onClick={toggleGameCount} className="player-game">
            {showGameCount ? "Hide game count" : "Show game count"}
          </a>
          {showGameCount &&
            <p className="player-game">Games played: {gameCount}</p>}
        </div>
        <button className=" players-remove" onClick={() => deletePlayer(player)}></button>
      </div >

    </>
  )
}

export default Player
