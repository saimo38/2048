import type{ AppScreen } from "../types";

type Props = {
    onNavigate: (screen: AppScreen) => void;
};

const HowToPlayPage = ({ onNavigate }: Props) => {
    return (
        <div>
            <h1>2048</h1>
            <h2>Jak hrát</h2>
            <p>
                Posouvej dlaždice swipenutím prstu nebo šipkami, pokud jsi na pc. Pokud posuneš proti sobě dvě stejná čísla,
                spojí se v jedno dvojnásobné. Dosáhni čísla 2048!
            </p>
            <button onClick={() => onNavigate("menu")}>Zpět</button>
        </div>
    );
};

export default HowToPlayPage;