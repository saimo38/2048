import { useEffect } from "react";
import type{ Direction } from "../types";

const KEY_MAP: Record<string, Direction> = {
    ArrowLeft: "left",
    ArrowRight: "right",
    ArrowUp: "up",
    ArrowDown: "down",
};

export const useKeyboard = (onMove: (direction: Direction) => void, active: boolean) => {
    useEffect(() => {
        if (!active) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            const direction = KEY_MAP[e.key];
            if (direction) {
                e.preventDefault();
                onMove(direction);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onMove, active]);
};