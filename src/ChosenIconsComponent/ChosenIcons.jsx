import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChosenIcons.css";

const ChosenIcon = ({ player1IconType, player2IconType }) => (
  <div className="chosenIconsContainer">
    <div className="chosenValue">
      <p>YOU</p>
      <FontAwesomeIcon icon={player1IconType} className="chosenIcons" />
    </div>
    <div className="chosenValue">
      <p>COMPUTER</p>
      <FontAwesomeIcon icon={player2IconType} className="chosenIcons" />
    </div>
  </div>
);

export default ChosenIcon;
