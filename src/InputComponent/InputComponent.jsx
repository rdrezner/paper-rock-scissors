import React from "react";
import "./InputComponent.css";

const InputComponent = ({ value, handleOnChage, isInputValid }) => (
  <div>
    <div className="inputContainer">
      <p className="gameRule">You must complete this field before playing: </p>
      <input
        type="number"
        name="numberOfGames"
        onChange={handleOnChage}
        value={value}
        placeholder="Number of games"
      />
    </div>
    {!isInputValid && (
      <p className="fieldValidation">
        Field can only contain numbers and cannot be empty
      </p>
    )}
  </div>
);

export default InputComponent;
