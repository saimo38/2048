import { useState } from "react";
import type { AppScreen } from "./types";
import MainMenuPage from "./pages/MainMenuPage";
import HowToPlayPage from "./pages/HowToPlayPage";
import GamePage from "./pages/GamePage";

const getSavedScreen = (): AppScreen => {
    try {
        const saved = localStorage.getItem("2048-game-state");
        if (saved) {
            const state = JSON.parse(saved);
            if (state.status === "playing") return "game";
        }
    } catch {
        return "menu";
    }
    return "menu";
};

const App = () => {
    const [screen, setScreen] = useState<AppScreen>(getSavedScreen);

    return (
        <>
            {screen === "menu" && <MainMenuPage onNavigate={setScreen} />}
            {screen === "howtoplay" && <HowToPlayPage onNavigate={setScreen} />}
            {screen === "game" && <GamePage onNavigate={setScreen} />}
        </>
    );
};

export default App;