
import React, { useState } from "react";
import PlayerCard from "./components/PlayerCard";
import imageUrl from "./assets/mock-avatar.jpg";
import CreatePlayers from "./components/CreatePlayers";
import _ from "lodash";

function Form() {
  const [players, setPlayers] = useState([]);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    gameCount: "",
  });
  const [showData, setShowData] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const deletePlayer = passedInPlayer => {
    setPlayers(players.filter(playerInTheList => playerInTheList.userName !== passedInPlayer.userName));
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCreatePlayer = () => {
    const newPlayer = {
      firstName: values.firstName,
      lastName: values.lastName,
      userName: values.userName,
      gameCount: values.gameCount,
      imageUrl: imageUrl,
    };
    checkIfUserExists(newPlayer);
    setShowData(!showData);
  };

  const handleButtonDisabled = () => {
    const { firstName, lastName, userName, gameCount } = values;
    return firstName && lastName && userName && gameCount ? !isDisabled : isDisabled
  }


  const checkIfUserExists = newPlayer => {
    if (players.some(player => player.userName === newPlayer.userName)) {
      alert("This player already exists!");
      return;
    }
    setPlayers([...players, newPlayer]);
  }

  return (
    <>
      <h1 className="section-title">Add new players</h1>
      <CreatePlayers
        handleInputChange={handleInputChange}
        handleCreatePlayer={handleCreatePlayer}
        handleButtonDisabled={handleButtonDisabled}
      />

      <h3 className="section-title">Players</h3>
      {players.map((player, index) => (
        <PlayerCard
          key={index}
          firstName={player.firstName}
          lastName={player.lastName}
          userName={player.userName}
          gameCount={player.gameCount}
          imageUrl={player.imageUrl}
          player={player}
          deletePlayer={deletePlayer}
        />
      ))}
    </>
  );
}

export default Form;

