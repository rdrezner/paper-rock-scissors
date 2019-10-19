import React from "react";
import ScoreComponent from "../ScoreComponent/ScoreComponent";
import ChosenIcons from "../ChosenIconsComponent/ChosenIcons";

const ResultComponent = ({
  score,
  player1IconType,
  computerIconType,
  isEndOfGame,
  numberOfGames
}) => {
  return (
    <>
      <p>{numberOfGames !== 0 && `Round: ${numberOfGames}`}</p>
      <ChosenIcons
        player2IconType={computerIconType}
        player1IconType={player1IconType}
      />
      {isEndOfGame && <ScoreComponent score={score} />}
    </>
  );
};

export default ResultComponent;
