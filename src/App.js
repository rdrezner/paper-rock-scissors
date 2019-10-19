import React, { useState } from "react";
import "./App.css";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import InputComponent from "./InputComponent/InputComponent";
import ChoosingPanel from "./ChoosingPanelComponent/ChoosingPanel";
import ResultComponent from "./ResultComponent/ResultComponent";
import { iconArr, possibilities } from "./utils/arrays";

function App() {
  const [value, setValue] = useState("");
  const [player1IconType, setPlayer1IconType] = useState(faQuestionCircle);
  const [computerIconType, setComputerIconType] = useState(faQuestionCircle);
  const [isInputValid, setValidationOfInput] = useState(null);
  let [numberOfWins, setNumberOfWins] = useState(0);
  let [numberOfLosses, setNumberOfLosses] = useState(0);
  let [numberOfDraws, setNumberOfDraws] = useState(0);

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
    result !== "DRAW" &&
      (result === "WIN"
        ? setNumberOfWins(++numberOfWins)
        : setNumberOfLosses(++numberOfLosses));
    result === "DRAW" && setNumberOfDraws(++numberOfDraws);
  };

  const validateInput = value => {
    const regex = /^\d+$/;
    const isOnlyNumber = regex.test(Number(value));
    setValidationOfInput(value && isOnlyNumber);
  };

  const resetGame = () => {
    setValue("");
    setValidationOfInput(false);
    setPlayer1IconType(faQuestionCircle);
    setComputerIconType(faQuestionCircle);
    setNumberOfWins(0);
    setNumberOfLosses(0);
    setNumberOfDraws(0);
  };

  const handleOnChage = e => {
    resetGame();
    setValue(e.target.value);
    validateInput(e.target.value);
  };
  const numberOfGames = numberOfWins + numberOfLosses + numberOfDraws;
  const isEndOfGame = numberOfGames !== 0 && numberOfGames === Number(value);
  return (
    <div className="App">
      <header className="AppContainer">
        <InputComponent
          value={value}
          handleOnChage={handleOnChage}
          isInputValid={isInputValid}
        />
        <ResultComponent
          numberOfGames={numberOfGames}
          score={{
            wins: numberOfWins,
            losses: numberOfLosses,
            draw: numberOfDraws
          }}
          player1IconType={player1IconType}
          computerIconType={computerIconType}
          isEndOfGame={isEndOfGame}
        />
        <ChoosingPanel
          setPlayer1IconType={setPlayer1IconType}
          setComputerIconType={setComputerIconType}
          countGameScores={countGameScores}
          isInputValid={isInputValid}
          isEndOfGame={isEndOfGame}
        />
        <p className="paragraph">
          If you want to start game from the begining, change value in input
        </p>
      </header>
    </div>
  );
}

export default App;
