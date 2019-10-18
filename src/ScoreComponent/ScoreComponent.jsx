import React from "react";

const ScoreComponent = ({ score }) => (
  <div style={{ fontSize: "30px" }}> {`${score.wins} : ${score.losses}`} </div>
);

export default ScoreComponent;
