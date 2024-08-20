import GameState from "./gamestate";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over">O wins!</div>;
    case GameState.playerXWins:
      return <div className="game-over">X wins!</div>;
    case GameState.draw:
      return <div className="game-over">Draw!</div>;
    default:
      return <></>;
  }
  return <div>Game over</div>;
}

export default GameOver;