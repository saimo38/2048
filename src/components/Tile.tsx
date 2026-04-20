import type { Tile as TileType } from "../types";
import { TILE_COLORS, TILE_COLOR_SUPER } from "../theme";
import "../styles/Tile.css";

type Props = { tile: TileType; };

const Tile = ({ tile }: Props) => {
    const colors = TILE_COLORS[tile.value] ?? TILE_COLOR_SUPER;
    const className = [
        "tile",
        tile.isNew && "tile-new",
        tile.isMerged && "tile-merged",
    ].filter(Boolean).join(" ");

    return (
        <div className={className} style={{
            backgroundColor: tile.value === 0 ? "var(--color-cell-empty)" : colors.bg,
            color: colors.text,
        }}>
            <span>{tile.value !== 0 ? tile.value : "\u00A0"}</span>
        </div>
    );
};

export default Tile;