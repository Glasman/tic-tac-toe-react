import { useState, useEffect } from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  //rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },
];

function checkWinner() {
  console.log("check winner");
}

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();

  const handleTileClick = (index) => {
    if (tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  useEffect(() => {
    checkWinner();
  }, [tiles]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        strikeClass={strikeClass}
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
      />
    </div>
  );
}
export default TicTacToe;