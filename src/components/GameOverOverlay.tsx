import "../styles/Overlay.css";
type Props = { score: number; onPlayAgain: () => void; onMenu: () => void; };
const GameOverOverlay = ({ score, onPlayAgain, onMenu }: Props) => (
    <div className="overlay">
        <div className="overlay-box">
            <div style={{fontSize:"32px"}}>😔</div>
            <div className="overlay-title" style={{color:"var(--color-error)"}}>Konec hry</div>
            <div className="overlay-score">Skóre: {score}</div>
            <button className="btn btn-primary" onClick={onPlayAgain}>▶ Hrát znovu</button>
            <button className="btn btn-secondary" onClick={onMenu}>🏠 Menu</button>
        </div>
    </div>
);
export default GameOverOverlay;