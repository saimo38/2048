import type { AppScreen } from "../types";
import "../styles/HowToPlayPage.css";
type Props = { onNavigate: (screen: AppScreen) => void; };
const HowToPlayPage = ({ onNavigate }: Props) => (
    <div className="howtoplay">
        <h1>2048</h1>
        <h2>Jak hrát</h2>
        <p>Posouvej dlaždice swipenutím prstu nebo šipkami na klávesnici. Pokud posuneš proti sobě dvě stejná čísla, spojí se v jedno dvojnásobné. Dosáhni čísla 2048!</p>
        <button className="btn btn-secondary" onClick={() => onNavigate("menu")}>← Zpět</button>
    </div>
);
export default HowToPlayPage;