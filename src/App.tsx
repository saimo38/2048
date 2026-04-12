import { useState } from "react";
import type { AppScreen } from "./types";
import MainMenuPage from "./pages/MainMenuPage";
import HowToPlayPage from "./pages/HowToPlayPage";
import GamePage from "./pages/GamePage";

const App = () => {
    const [screen, setScreen] = useState<AppScreen>("menu");

    return (
        <>
            {screen === "menu" && <MainMenuPage onNavigate={setScreen} />}
            {screen === "howtoplay" && <HowToPlayPage onNavigate={setScreen} />}
            {screen === "game" && <GamePage onNavigate={setScreen} />}
        </>
    );
};

export default App;