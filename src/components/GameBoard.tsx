import type { Tile as TileType } from "../types";
import Tile from "./Tile";
import "../styles/GameBoard.css";
type Props = { board: TileType[][]; };
const GameBoard = ({ board }: Props) => (
    <div className="gameboard">
        {board.map((row) => row.map((tile) => (
            <Tile key={tile.id} tile={tile} />
        )))}
    </div>
);
export default GameBoard;