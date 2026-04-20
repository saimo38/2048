import type { AppScreen } from "../types";
import { useGameState } from "../hooks/useGameState";
import { useKeyboard } from "../hooks/useKeyboard";
import { useSwipe } from "../hooks/useSwipe";
import ScoreBoard from "../components/ScoreBoard";
import GameBoard from "../components/GameBoard";
import GameOverOverlay from "../components/GameOverOverlay";
import WinOverlay from "../components/WinOverlay";
import "../styles/GamePage.css";
type Props = { onNavigate: (screen: AppScreen) => void; };
const GamePage = ({ onNavigate }: Props) => {
    const { gameState, handleMove, handleUndo, handleNewGame } = useGameState();
    const isPlaying = gameState.status === "playing";
    useKeyboard(handleMove, isPlaying);
    useSwipe(handleMove, isPlaying);
    return (
        <div className="gamepage">
            <ScoreBoard score={gameState.score} bestScore={gameState.bestScore} />
            <GameBoard board={gameState.board} />
            <div className="gamepage-buttons">
                <button className="btn-small btn-undo" onClick={handleUndo}>↩ Zpět</button>
                <button className="btn-small btn-quit" onClick={() => {
                    localStorage.removeItem("2048-game-state");
                    onNavigate("menu");
                }}>🏠 Menu</button>
            </div>
            {gameState.status === "lost" && <GameOverOverlay score={gameState.score} onPlayAgain={handleNewGame} onMenu={() => {
                localStorage.removeItem("2048-game-state");
                onNavigate("menu");
            }} />}
            {gameState.status === "won" && <WinOverlay score={gameState.score} onContinue={() => {}} onMenu={() => {
                localStorage.removeItem("2048-game-state");
                onNavigate("menu");
            }} />}
        </div>
    );
};
export default GamePage;