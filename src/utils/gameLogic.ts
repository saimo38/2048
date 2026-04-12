import type { Tile, GameState } from "../types";

let nextId = 1;

// Vytvoří prázdné 4x4 pole
export const createEmptyBoard = (): Tile[][] => {
    return Array.from({ length: 4 }, (_, row) =>
        Array.from({ length: 4 }, (_, col) => ({
            id: nextId++,
            value: 0,
            row,
            col,
        }))
    );
};

// Přidá náhodnou dlaždici (90% šance na 2, 10% na 4)
export const addRandomTile = (board: Tile[][]): Tile[][] => {
    const empty: { row: number; col: number }[] = [];

    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c].value === 0) {
                empty.push({ row: r, col: c });
            }
        }
    }

    if (empty.length === 0) return board;

    const { row, col } = empty[Math.floor(Math.random() * empty.length)];
    const newBoard = board.map(r => r.map(t => ({ ...t })));
    newBoard[row][col] = {
        id: nextId++,
        value: Math.random() < 0.9 ? 2 : 4,
        row,
        col,
        isNew: true,
    };

    return newBoard;
};

// Posune a sloučí jeden řádek doleva
const slideRow = (row: Tile[]): { row: Tile[]; score: number } => {
    // Vyfiltruj prázdná pole
    const tiles = row.filter(t => t.value !== 0);
    let score = 0;

    // Sloučení sousedních stejných hodnot
    for (let i = 0; i < tiles.length - 1; i++) {
        if (tiles[i].value === tiles[i + 1].value) {
            tiles[i] = {
                ...tiles[i],
                value: tiles[i].value * 2,
                isMerged: true,
            };
            score += tiles[i].value;
            tiles.splice(i + 1, 1);
        }
    }

    // Doplňí prázdná pole na konec
    while (tiles.length < 4) {
        tiles.push({ id: nextId++, value: 0, row: 0, col: 0, });
    }

    return { row: tiles, score };
};

// Opraví row/col souřadnice po posunu
const fixCoords = (board: Tile[][]): Tile[][] => {
    return board.map((row, r) =>
        row.map((tile, c) => ({ ...tile, row: r, col: c }))
    );
};

// Otočí pole o 90° doprava
const rotateRight = (board: Tile[][]): Tile[][] => {
    return Array.from({ length: 4 }, (_, r) =>
        Array.from({ length: 4 }, (_, c) => board[3 - c][r])
    );
};

// Otočí pole o 90° doleva
const rotateLeft = (board: Tile[][]): Tile[][] => {
    return Array.from({ length: 4 }, (_, r) =>
        Array.from({ length: 4 }, (_, c) => board[c][3 - r])
    );
};

// Resetuje isNew a isMerged před každým tahem
const resetFlags = (board: Tile[][]): Tile[][] => {
    return board.map(row =>
        row.map(tile => ({ ...tile, isNew: false, isMerged: false }))
    );
};

// Hlavní funkce posunu — základ je vždy moveLeft, ostatní rotují
const move = (
    board: Tile[][],
    direction: "left" | "right" | "up" | "down"
): { board: Tile[][]; score: number } => {
    let b = resetFlags(board);
    let totalScore = 0;

    // Rotuj tak, aby šel posun vždy doleva
    if (direction === "right") b = rotateRight(rotateRight(b));
    if (direction === "up") b = rotateLeft(b);
    if (direction === "down") b = rotateRight(b);

    // Posuň každý řádek doleva
    b = b.map(row => {
        const { row: newRow, score } = slideRow(row);
        totalScore += score;
        return newRow;
    });

    // Rotuj zpět
    if (direction === "right") b = rotateRight(rotateRight(b));
    if (direction === "up") b = rotateRight(b);
    if (direction === "down") b = rotateLeft(b);

    return { board: fixCoords(b), score: totalScore };
};

// Zkontroluje jestli se pole změnilo (= tah byl platný)
const boardChanged = (before: Tile[][], after: Tile[][]): boolean => {
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            if (before[r][c].value !== after[r][c].value) return true;
        }
    }
    return false;
};

// Zkontroluje výhru (někde je 2048)
export const checkWin = (board: Tile[][]): boolean => {
    return board.some(row => row.some(tile => tile.value === 2048));
};

// Zkontroluje prohru (žádný možný tah)
export const checkLoss = (board: Tile[][]): boolean => {
    // Zkontroluje, jestli jsou nějaká prázdná místa
    if (board.some(row => row.some(tile => tile.value === 0))) return false;

    // Zkontroluje, jestli jdou sloučit sousední dlaždice
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            const val = board[r][c].value;
            if (c < 3 && board[r][c + 1].value === val) return false;
            if (r < 3 && board[r + 1][c].value === val) return false;
        }
    }

    return true;
};

// Hlavní funkce — zpracuje tah a vrátí nový GameState
export const applyMove = (
    state: GameState,
    direction: "left" | "right" | "up" | "down"
): GameState => {
    const { board: newBoard, score } = move(state.board, direction);

    if (!boardChanged(state.board, newBoard)) return state; // tah nic nezměnil

    const boardWithNewTile = addRandomTile(newBoard);
    const newScore = state.score + score;
    const newBestScore = Math.max(newScore, state.bestScore);

    const status = checkWin(boardWithNewTile)
        ? "won"
        : checkLoss(boardWithNewTile)
            ? "lost"
            : "playing";

    return {
        board: boardWithNewTile,
        score: newScore,
        bestScore: newBestScore,
        status,
        previousBoard: state.board,
        previousScore: state.score,
    };
};

// Undo — vrátí předchozí tah
export const undoMove = (state: GameState): GameState => {
    if (!state.previousBoard) return state;

    return {
        ...state,
        board: state.previousBoard,
        score: state.previousScore ?? state.score,
        status: "playing",
        previousBoard: undefined,
        previousScore: undefined,
    };
};

// Nová hra
export const createInitialState = (bestScore: number = 0): GameState => {
    const empty = createEmptyBoard();
    const withTiles = addRandomTile(addRandomTile(empty));

    return {
        board: withTiles,
        score: 0,
        bestScore,
        status: "playing",
    };
};