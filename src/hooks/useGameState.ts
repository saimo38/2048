import { useState } from "react";
import type { GameState, Direction } from "../types";
import {
    createInitialState,
    applyMove,
    undoMove,
} from "../utils/gameLogic";

const BEST_SCORE_KEY = "2048-best-score";
const GAME_STATE_KEY = "2048-game-state";

const loadBestScore = (): number => {
    try {
        const saved = localStorage.getItem(BEST_SCORE_KEY);
        return saved ? parseInt(saved) : 0;
    } catch {
        return 0;
    }
};

const saveBestScore = (score: number): void => {
    try {
        localStorage.setItem(BEST_SCORE_KEY, score.toString());
    } catch {
        console.error("Chyba při ukládání best score");
    }
};

const loadGameState = (): GameState | null => {
    try {
        const saved = localStorage.getItem(GAME_STATE_KEY);
        return saved ? JSON.parse(saved) : null;
    } catch {
        return null;
    }
};

const saveGameState = (state: GameState): void => {
    try {
        localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
    } catch {
        console.error("Chyba při ukládání stavu hry");
    }
};

export const useGameState = () => {
    const [gameState, setGameState] = useState<GameState>(() => {
        const saved = loadGameState();
        if (saved && saved.status === "playing") return saved;
        return createInitialState(loadBestScore());
    });

    const handleMove = (direction: Direction) => {
        setGameState(prev => {
            const newState = applyMove(prev, direction);
            if (newState.bestScore > prev.bestScore) {
                saveBestScore(newState.bestScore);
            }
            saveGameState(newState);
            return newState;
        });
    };

    const handleUndo = () => {
        setGameState(prev => {
            const newState = undoMove(prev);
            saveGameState(newState);
            return newState;
        });
    };

    const handleNewGame = () => {
        const newState = createInitialState(loadBestScore());
        saveGameState(newState);
        localStorage.removeItem(GAME_STATE_KEY);
        setGameState(newState);
    };

    return {
        gameState,
        handleMove,
        handleUndo,
        handleNewGame,
    };
};