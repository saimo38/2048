import { useState } from "react";
import type { GameState, Direction } from "../types";
import {
    createInitialState,
    applyMove,
    undoMove,
} from "../utils/gameLogic";

const BEST_SCORE_KEY = "2048-best-score";

const loadBestScore = (): number => {
    const saved = localStorage.getItem(BEST_SCORE_KEY);
    return saved ? parseInt(saved) : 0;
};

const saveBestScore = (score: number): void => {
    localStorage.setItem(BEST_SCORE_KEY, score.toString());
};

export const useGameState = () => {
    const [gameState, setGameState] = useState<GameState>(() =>
        createInitialState(loadBestScore())
    );

    const handleMove = (direction: Direction) => {
        setGameState(prev => {
            const newState = applyMove(prev, direction);
            if (newState.bestScore > prev.bestScore) {
                saveBestScore(newState.bestScore);
            }
            return newState;
        });
    };

    const handleUndo = () => {
        setGameState(prev => undoMove(prev));
    };

    const handleNewGame = () => {
        setGameState(createInitialState(loadBestScore()));
    };

    return {
        gameState,
        handleMove,
        handleUndo,
        handleNewGame,
    };
};