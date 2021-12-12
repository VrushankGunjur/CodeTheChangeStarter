import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

import Square from "./Square";


const Game = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const[stepNumber, setStepNumber] = useState(0);
  const[xIsNext, setXisNext] = useState(true);

  let curWinner = calculateWinner(board);
  let character = 'X';

const handleClick = (index) =>
{
  if(calculateWinner(board) != null) return;  //winner has already been determined

  if(board[index] === 'X' || board[index] === 'O') return;    // this box is already assigned a character

  //handle the click if it's a valid one
  if(xIsNext) 
  {
    const newArray = [...board];
    newArray[index] = 'X';
    setBoard(newArray);


    //board[index] = 'X';
    setXisNext(false);
    setStepNumber(stepNumber + 1);
  }
  else
  {
    const newArray = [...board];
    newArray[index] = 'O';
    setBoard(newArray);
    //board[index] = 'O';
    setXisNext(true)
    setStepNumber(stepNumber + 1);
  }
}

const jumpToStart = () =>
{
  setBoard(Array(9).fill(null));
  //board = [];
  setXisNext(true);
  //xIsNext = true;
  curWinner = null;
  setStepNumber(0); 
}

const result = () =>
{
  if(calculateWinner(board) != null)
  {
    return "Winner: " + calculateWinner(board);
  }

  if(stepNumber >= 9) return "Tie Game";

  if(xIsNext)
  {
    return "Next Player: X";
  }
  else return "Next Player: O";

}

  return (
    
    <>
      <h1 className="text">Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick}/>
      <div className="info-wrapper">
        <div>
          <button className="button" onClick={jumpToStart}>Go to Start</button>
        </div>
        <h3 className="result">{result()}</h3>
      </div>
      {/*<Board squares={boardValues} onClick={() => handleClick(0)}></Board>*/}
    </>

  );
};


export default Game;
