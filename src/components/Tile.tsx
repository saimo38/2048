import type { Tile as TileType } from "../types";
import { TILE_COLORS, TILE_COLOR_SUPER } from "../theme";
import "../styles/Tile.css";
type Props = { tile: TileType; };
const Tile = ({ tile }: Props) => {
    const colors = TILE_COLORS[tile.value] ?? TILE_COLOR_SUPER;
    return (
        <div className="tile" style={{
            backgroundColor: tile.value === 0 ? "var(--color-cell-empty)" : colors.bg,
            color: colors.text,
            fontSize: tile.value >= 1000 ? "clamp(11px,3vw,20px)" : tile.value >= 100 ? "clamp(13px,3.5vw,24px)" : "clamp(16px,4vw,28px)",
        }}>
            {tile.value !== 0 && tile.value}
        </div>
    );
};
export default Tile;