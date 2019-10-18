import React from "react";
import ScoreComponent from "../ScoreComponent/ScoreComponent";
import ChosenIcons from "../ChosenIconsComponent/ChosenIcons";

const ResultComponent = ({
  value,
  score,
  player1IconType,
  computerIconType
}) => {
  const numberOfGames = score && score.wins + score.losses + score.draw;
  return (
    <>
      <ChosenIcons
        player2IconType={computerIconType}
        player1IconType={player1IconType}
      />
      {value && numberOfGames === Number(value) && (
        <ScoreComponent score={score} />
      )}
    </>
  );
};

export default ResultComponent;
