type Props = {
    score: number;
    bestScore: number;
};

const ScoreBoard = ({ score, bestScore }: Props) => {
    return (
        <div>
            <div>
                <span>Score</span>
                <span>{score}</span>
            </div>
            <div>
                <span>Best</span>
                <span>{bestScore}</span>
            </div>
        </div>
    );
};

export default ScoreBoard;