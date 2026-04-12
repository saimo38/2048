import type { AppScreen } from "../types";
import ScoreBoard from "../components/ScoreBoard";
import "../styles/MainMenuPage.css";

type Props = {
    onNavigate: (screen: AppScreen) => void;
};

const MainMenuPage = ({ onNavigate }: Props) => {
    const bestScore = parseInt(localStorage.getItem("2048-best-score") ?? "0");
    return (
        <div className="menu-wrapper">
            <h1 className="menu-title">2048</h1>
            <p className="menu-subtitle">Spoj čísla a dosáhni 2048!</p>
            <ScoreBoard score={0} bestScore={bestScore} />
            <div className="menu-buttons">
                <button className="btn btn-primary" onClick={() => onNavigate("game")}>▶ Hrát</button>
                <button className="btn btn-secondary" onClick={() => onNavigate("howtoplay")}>? Jak hrát</button>
            </div>
        </div>
    );
};

export default MainMenuPage;