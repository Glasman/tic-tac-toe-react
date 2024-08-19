import { useState } from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_O = "O";

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState()
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board tiles={tiles} />
        </div>
    )
}
export default TicTacToe