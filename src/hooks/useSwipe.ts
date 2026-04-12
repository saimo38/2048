import { useEffect, useRef } from "react";
import type { Direction } from "../types";

const MIN_SWIPE = 30;

export const useSwipe = (onMove: (direction: Direction) => void, active: boolean) => {
    const touchStart = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        if (!active) return;

        const handleTouchStart = (e: TouchEvent) => {
            const touch = e.touches[0];
            touchStart.current = { x: touch.clientX, y: touch.clientY };
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (!touchStart.current) return;

            const touch = e.changedTouches[0];
            const dx = touch.clientX - touchStart.current.x;
            const dy = touch.clientY - touchStart.current.y;

            if (Math.abs(dx) < MIN_SWIPE && Math.abs(dy) < MIN_SWIPE) return;

            let direction: Direction;

            if (Math.abs(dx) > Math.abs(dy)) {
                direction = dx > 0 ? "right" : "left";
            } else {
                direction = dy > 0 ? "down" : "up";
            }

            onMove(direction);
            touchStart.current = null;
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [onMove, active]);
};