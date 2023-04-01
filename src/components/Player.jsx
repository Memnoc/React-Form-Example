
import '../styles/styles.css';
const Player = ({ firstName, lastName, userName, gameCount, imageUrl }) => {
  return (
    <>
      <div className="player-card">
        <img className="player-image" src={imageUrl} alt={gameCount} />
        <div className="player-info">
          <h3 className="player-name">{firstName} {lastName}</h3>
          <p className="player-team">{userName}</p>
          <p className="player-team">{`Games played: ${gameCount}`}</p>
        </div>
      </div>
    </>
  )
}

export default Player
