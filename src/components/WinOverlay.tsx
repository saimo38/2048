import "../styles/Overlay.css";
type Props = { score: number; onContinue: () => void; onMenu: () => void; };
const WinOverlay = ({ score, onContinue, onMenu }: Props) => (
    <div className="overlay">
        <div className="overlay-box">
            <div style={{fontSize:"32px"}}>🎉</div>
            <div className="overlay-title">2048!</div>
            <div className="overlay-score">Skóre: {score}</div>
            <button className="btn btn-primary" onClick={onContinue}>▶ Pokračovat</button>
            <button className="btn btn-secondary" onClick={onMenu}>🏠 Menu</button>
        </div>
    </div>
);
export default WinOverlay;