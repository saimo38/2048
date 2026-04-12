import type { Tile as TileType } from "../types";
import Tile from "./Tile";

type Props = {
    board: TileType[][];
};

const GameBoard = ({ board }: Props) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 80px)",
            gridTemplateRows: "repeat(4, 80px)",
            gap: "8px",
            padding: "8px",
            backgroundColor: "#ccc",
            width: "fit-content",
        }}>
            {board.map((row) =>
                row.map((tile) => (
                    <Tile key={tile.id} tile={tile} />
                ))
            )}
        </div>
    );
};

export default GameBoard;