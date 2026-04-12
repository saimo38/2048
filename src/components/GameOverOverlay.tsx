type Props = {
    score: number;
    onPlayAgain: () => void;
    onMenu: () => void;
};

const GameOverOverlay = ({ score, onPlayAgain, onMenu }: Props) => {
    return (
        <div>
            <h2>Game Over</h2>
            <p>Score: {score}</p>
            <button onClick={onPlayAgain}>Hrát znovu</button>
            <button onClick={onMenu}>Menu</button>
        </div>
    );
};

export default GameOverOverlay;