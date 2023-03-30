import React, { useState } from "react";

export default function Form() {

  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    gameCount: "",
  };

  const [values, setValues] = useState(initialValues);

  const [showData, setShowData] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    setShowData(!showData);
  };

  return (
    <>
      <form>
        <input
          value={values.firstName}
          onChange={handleInputChange}
          name="firstName"
          label="First Name"
        />
        <input
          value={values.lastName}
          onChange={handleInputChange}
          name="lastName"
          label="Last Name"
        />

        <input
          value={values.userName}
          onChange={handleInputChange}
          name="userName"
          label="User Name"
        />
        <input
          value={values.gameCount}
          onChange={handleInputChange}
          name="gameCount"
          label="Game Count"
        />
      </form>
      <button onClick={handleButtonClick} type="submit"> Submit </button>
      {showData && (
        <div>
          <h3>Form data</h3>
          <p>{values.firstName}</p>
          <p>{values.lastName}</p>
          <p>{values.userName}</p>
          <p>{values.gameCount}</p>
        </div>

      )}
    </>
  );
}
