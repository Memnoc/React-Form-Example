import Player from "./Player"

const PlayerCard = ({ firstName, lastName, userName, gameCount, imageUrl, player, deletePlayer }) => {
  return (
    <div>
      <Player
        firstName={firstName}
        lastName={lastName}
        userName={userName}
        gameCount={gameCount}
        imageUrl={imageUrl}
        player={player}
        deletePlayer={deletePlayer}
      />


    </div>
  )
}

export default PlayerCard
