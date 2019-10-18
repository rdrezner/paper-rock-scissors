import {
  faHandScissors,
  faHandRock,
  faHandPaper
} from "@fortawesome/free-solid-svg-icons";

export const iconArr = [faHandPaper, faHandRock, faHandScissors];

export const possibilities = [
  ["DRAW", "LOSS", "WIN"],
  ["WIN", "DRAW", "LOSS"],
  ["LOSS", "WIN", "DRAW"]
];
