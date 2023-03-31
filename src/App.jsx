import React, { useState } from "react";
import PlayerCard from "./components/PlayerCard";
import imageUrl from "./assets/mock-avatar.jpg"
import CreatePlayers from "./components/CreatePlayers";

export default function Form() {

  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    gameCount: "",
  };

  const [players, setValues] = useState(initialValues);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...players,
      [name]: value,
    });

  };

  const [showData, setShowData] = useState(false);

  const handleButtonClick = () => {
    setShowData(!showData);
  };


  return (
    <>
      <CreatePlayers
        handleInputChange={handleInputChange}
        handleButtonClick={handleButtonClick}
        initialValues={initialValues}
        players={players}
        isDisabled={isDisabled}


      />

      <h3>Form data</h3>
      {showData && (
        <>
          <PlayerCard
            firstName={players.firstName}
            lastName={players.lastName}
            userName={players.userName}
            gameCount={players.gameCount}
            imageUrl={imageUrl}
          />
        </>
      )}
    </>
  );
}
