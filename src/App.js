import React, { useState } from "react";
import "./App.css";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import InputComponent from "./InputComponent/InputComponent";
import ChoosingPanel from "./ChoosingPanelComponent/ChoosingPanel";
import ResultComponent from "./ResultComponent/ResultComponent";
import { iconArr, possibilities } from "./utils/arrays";

let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfDraws = 0;

function App() {
  const [value, setValue] = useState("");
  const [player1IconType, setPlayer1IconType] = useState(faQuestionCircle);
  const [computerIconType, setComputerIconType] = useState(faQuestionCircle);
  const [score, setScore] = useState(null);
  const [isInputValid, setValidationOfInput] = useState(null);

  const setPlayersIcons = (player1IconType, randomIndex) => {
    setPlayer1IconType(player1IconType);
    //in the future we can use PAWN from Unreal Engine to define if we want to play wih user user or computer
    const randomElement = iconArr[randomIndex];
    setComputerIconType(randomElement);
  };

  const countGameScores = player1IconType => {
    const randomIndex = Math.floor(Math.random() * iconArr.length);
    setPlayersIcons(player1IconType, randomIndex);

    const indexOfUserChoice = iconArr.indexOf(player1IconType);
    const indexOfComputerChoice = randomIndex;

    const result = possibilities[indexOfComputerChoice][indexOfUserChoice];

    result !== "DRAW" && (result === "WIN" ? numberOfWins++ : numberOfLosses++);
    result === "DRAW" && numberOfDraws++;
    setScore({
      wins: numberOfWins,
      losses: numberOfLosses,
      draw: numberOfDraws
    });
  };

  const validateInput = value => {
    const regex = /^\d+$/;
    const isOnlyNumber = regex.test(Number(value));
    setValidationOfInput(value && isOnlyNumber);
  };
  const handleOnChage = e => {
    setValue(e.target.value);
    validateInput(e.target.value);
  };

  return (
    <div className="App">
      <header className="AppContainer">
        <InputComponent
          value={value}
          handleOnChage={handleOnChage}
          isInputValid={isInputValid}
        />
        <ResultComponent
          value={value}
          score={score}
          player1IconType={player1IconType}
          computerIconType={computerIconType}
        />
        <ChoosingPanel
          setPlayer1IconType={setPlayer1IconType}
          setComputerIconType={setComputerIconType}
          countGameScores={countGameScores}
          isInputValid={isInputValid}
        />
      </header>
    </div>
  );
}

export default App;
