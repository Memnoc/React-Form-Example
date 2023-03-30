import Player from "./Player"

const PlayerCard = ({ firstName, lastName, userName, gameCount, imageUrl }) => {
  return (
    <div>
      <Player
        firstName={firstName}
        lastName={lastName}
        userName={userName}
        gameCount={gameCount}
        imageUrl={imageUrl}
      />

    </div>
  )
}

export default PlayerCard
