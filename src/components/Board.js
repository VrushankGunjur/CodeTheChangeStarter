import React from "react";
import Square from "./Square";

const Board = ({squares, onClick}) => {
  // TODO: Populate the board with squares


return(
  <div className="board"> 
      {squares.map((square, idx) =>
        (<Square value={square} onClick={() => onClick(idx)} key={idx}/>)
      )}
      
  </div>
);

};

export default Board;
