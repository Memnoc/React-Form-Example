
import React, { useState } from "react";
import PlayerCard from "./components/PlayerCard";
import imageUrl from "./assets/mock-avatar.jpg";
import CreatePlayers from "./components/CreatePlayers";

function Form() {
  const [players, setPlayers] = useState([]);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    gameCount: "",
  });
  const [showData, setShowData] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    const newPlayer = {
      firstName: values.firstName,
      lastName: values.lastName,
      userName: values.userName,
      gameCount: values.gameCount,
      imageUrl: imageUrl,
    };
    setPlayers([...players, newPlayer]);
    setShowData(true);
  };

  return (
    <>
      <h1>Add new players</h1>
      <CreatePlayers
        handleInputChange={handleInputChange}
        handleButtonClick={handleButtonClick}
        values={values}
      />

      <h3>Players</h3>
      {players.map((player, index) => (
        <PlayerCard
          key={index}
          firstName={player.firstName}
          lastName={player.lastName}
          userName={player.userName}
          gameCount={player.gameCount}
          imageUrl={player.imageUrl}
        />
      ))}
    </>
  );
}

export default Form;

