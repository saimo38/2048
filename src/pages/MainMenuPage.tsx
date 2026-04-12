import type { AppScreen } from "../types";
import ScoreBoard from "../components/ScoreBoard";

type Props = {
    onNavigate: (screen: AppScreen) => void;
};

const MainMenuPage = ({ onNavigate }: Props) => {
    const bestScore = parseInt(localStorage.getItem("2048-best-score") ?? "0");

    return (
        <div>
            <h1>2048</h1>
            <ScoreBoard score={0} bestScore={bestScore} />
            <button onClick={() => onNavigate("game")}>Hrát</button>
            <button onClick={() => onNavigate("howtoplay")}>Info</button>
        </div>
    );
};

export default MainMenuPage;