import React from 'react'
import {useState} from 'react'
import Square from './Square';
import './style.css'

function calculateWinner(squares){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a]=== squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}


function GameBoard() {
    const[isXNext, setXNext] = useState(true);
    const[squares, setSquare] = useState(Array(9).fill(null));
    function handleClick(i){
        if(squares[i]||calculateWinner(squares)){
            return;
        }
        const newSquares = squares.slice();
        if(isXNext){
            newSquares[i] = "X"
        }
        else {
            newSquares[i] = "O";
        }
        setSquare(newSquares);
        setXNext(!isXNext);
    }

    function resetGame(){
        setSquare(Array(9).fill(null));
    }

    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status = "Winner is "+ winner;
    }
    else if(!squares.includes(null)&&!winner) {
        status = "Tie!";
    }
    else {
        status = "Current player is: " + (isXNext? "X": "O");
    }
  return (
    <div className = "container">
            <div>
            <div className ="status">{status}</div>
            <div className = "row">
          <Square className = "col-lg-4" value={squares[0]} onSquareClick={()=>handleClick(0)}/>
          <Square className = "col-lg-4" value={squares[1]} onSquareClick={()=>handleClick(1)}/>
          <Square className = "col-lg-4" value={squares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className = "row">
          <Square className = "col-lg-4" value={squares[3]} onSquareClick={()=>handleClick(3)}/>
          <Square className = "col-lg-4" value={squares[4]} onSquareClick={()=>handleClick(4)}/>
          <Square className = "col-lg-4" value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className = "row">
          <Square className = "col-lg-4" value={squares[6]} onSquareClick={()=>handleClick(6)}/>
          <Square className = "col-lg-4" value={squares[7]} onSquareClick={()=>handleClick(7)}/>
          <Square className = "col-lg-4" value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3">
        <button onClick={resetGame} className="reset-button">reset</button>
        </div>
       
            </div>
        </div>
  )
}

export default GameBoard