import React from "react";

const ScoreComponent = ({ score }) => (
  <div style={{ fontSize: "30px" }}>
    {`${score.wins} : ${score.losses}`}
    <p>End of Game</p>
  </div>
);

export default ScoreComponent;
