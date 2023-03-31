import { useState } from "react";


const CreatePlayers = ({ players, handleInputChange, handleButtonClick, isDisabled }) => {
  const { firstName, lastName, userName, gameCount } = players;

  const handleDisableButton = () => {
    return firstName && lastName && userName && gameCount ? !isDisabled : isDisabled
  }

  return (

    <div>
      <form>
        <input
          value={players.firstName}
          onChange={handleInputChange}
          name="firstName"
          label="First Name"
        />
        <input
          value={players.lastName}
          onChange={handleInputChange}
          name="lastName"
          label="Last Name"
        />

        <input
          value={players.userName}
          onChange={handleInputChange}
          name="userName"
          label="User Name"
        />
        <input
          value={players.gameCount}
          onChange={handleInputChange}
          name="gameCount"
          label="Game Count"
        />
      </form>
      <button className="add-player-button" onClick={handleButtonClick} type="submit" disabled={handleDisableButton()}> Add player </button>


    </div>
  )
}

export default CreatePlayers
