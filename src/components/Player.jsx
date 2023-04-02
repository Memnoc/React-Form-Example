
import '../styles/styles.css';
const Player = ({ firstName, lastName, userName, gameCount, imageUrl, deletePlayer, player }) => {
  return (
    <>
      <div className="player-card">
        <img className="player-image" src={imageUrl} alt={gameCount} />
        <div className="player-info">
          <h3 className="player-name">{firstName} {lastName}</h3>
          <p className="player-team">{userName}</p>
          <p className="player-team">{`Games played: ${gameCount}`}</p>
        </div>
        <button className=" players-remove" onClick={() => deletePlayer(player)}></button>
      </div >

    </>
  )
}

export default Player
