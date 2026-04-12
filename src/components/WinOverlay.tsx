type Props = {
    score: number;
    onContinue: () => void;
    onMenu: () => void;
};

const WinOverlay = ({ score, onContinue, onMenu }: Props) => {
    return (
        <div>
            <h2>2048!</h2>
            <p>Score: {score}</p>
            <button onClick={onContinue}>Pokračovat</button>
            <button onClick={onMenu}>Menu</button>
        </div>
    );
};

export default WinOverlay;