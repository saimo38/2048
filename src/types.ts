// Navigace mezi obrazovkami
export type AppScreen = "menu" | "howtoplay" | "game";

export type Tile = {
    id: number;
    value: number;
    row: number;
    col: number;
    isNew?: boolean;
    isMerged?: boolean;
};

export type GameStatus = "playing" | "won" | "lost";

export type GameState = {
    board: Tile[][];
    score: number;
    bestScore: number;
    status: GameStatus;
    previousBoard?: Tile[][];  // pro undo (BackButton)
    previousScore?: number;
};