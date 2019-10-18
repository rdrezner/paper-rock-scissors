import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChoosingPanel.css";
import { iconArr } from "../utils/arrays";

const ChoosingPanel = ({ countGameScores, isInputValid }) => {
  const handleOnClick = player1Icon => {
    isInputValid && countGameScores(player1Icon);
  };

  return (
    <div>
      Choose your icon:
      <div className="iconsContainer">
        {iconArr.map(icon => (
          <FontAwesomeIcon
            key={icon.iconName}
            icon={icon}
            className="icon"
            onClick={() => handleOnClick(icon)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChoosingPanel;
