import type { Tile as TileType } from "../types";

type Props = {
    tile: TileType;
};

const Tile = ({ tile }: Props) => {
    return (
        <div style={{
            width: "80px",
            height: "80px",
            backgroundColor: tile.value === 0 ? "#eee" : "#fff",
            border: "1px solid #999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
        }}>
            {tile.value !== 0 && tile.value}
        </div>
    );
};

export default Tile;