import type { AppScreen } from "../types";
import { useGameState } from "../hooks/useGameState";
import { useKeyboard } from "../hooks/useKeyboard";
import { useSwipe } from "../hooks/useSwipe";
import ScoreBoard from "../components/ScoreBoard";
import GameBoard from "../components/GameBoard";
import GameOverOverlay from "../components/GameOverOverlay";
import WinOverlay from "../components/WinOverlay";

type Props = {
    onNavigate: (screen: AppScreen) => void;
};

const GamePage = ({ onNavigate }: Props) => {
    const { gameState, handleMove, handleUndo, handleNewGame } = useGameState();
    const isPlaying = gameState.status === "playing";

    useKeyboard(handleMove, isPlaying);
    useSwipe(handleMove, isPlaying);

    return (
        <div>
            <ScoreBoard score={gameState.score} bestScore={gameState.bestScore} />
            <GameBoard board={gameState.board} />
            <button onClick={handleUndo}>Zpět</button>
            <button onClick={() => onNavigate("menu")}>Quit</button>

            {gameState.status === "lost" && (
                <GameOverOverlay
                    score={gameState.score}
                    onPlayAgain={handleNewGame}
                    onMenu={() => onNavigate("menu")}
                />
            )}

            {gameState.status === "won" && (
                <WinOverlay
                    score={gameState.score}
                    onContinue={() => {}}
                    onMenu={() => onNavigate("menu")}
                />
            )}
        </div>
    );
};

export default GamePage;