import "../styles/ScoreBoard.css";
type Props = { score: number; bestScore: number; };
const ScoreBoard = ({ score, bestScore }: Props) => (
    <div className="scoreboard">
        <div className="scoreboard-box">
            <span className="scoreboard-label">SKÓRE</span>
            <span className="scoreboard-value">{score}</span>
        </div>
        <div className="scoreboard-box">
            <span className="scoreboard-label">NEJLEPŠÍ</span>
            <span className="scoreboard-value">{bestScore}</span>
        </div>
    </div>
);
export default ScoreBoard;