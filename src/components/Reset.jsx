import GameState from "./gamestate";

function Reset({ gameState,onReset }) {
    if(gameState === GameState.inProgress) {
        return;
    }
    return ( <button onClick={onReset} className='reset-button'>Reset</button> );
}

export default Reset;