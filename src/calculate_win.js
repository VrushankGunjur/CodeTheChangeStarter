import Square from "./components/Square";

export function calculateWinner(squares) {
  // TODO: Given a game board, calculate the winner.
  // If there is no winner, you can return null.

  //check cols
  for(let idx = 0; idx < squares.length/3; idx++)
  {
    if(squares[idx] != null && (squares[idx] === squares[idx+3] && squares[idx] === squares[idx+6]))
    {
      return squares[idx];
    }
  }

  //check rows
  for(let idx = 0; idx < squares.length; idx+=3)
  {
    if(squares[idx] != null && (squares[idx] === squares[idx+1] && squares[idx] === squares[idx+2]))
    {
      return squares[idx];
    }
  }

  //check diag
  if(squares[0] != null && (squares[0] === squares[4] && squares[0] === squares[8])) return squares[0];
  if(squares[2] != null && (squares[2] === squares[4] && squares[2] === squares[6])) return squares[2];


  return null;
}
