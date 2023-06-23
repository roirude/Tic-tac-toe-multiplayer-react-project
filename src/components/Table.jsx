import React, { useState } from 'react'
import Scare from './Scare'

const Table = ({squares, gameStarted, xIsNext, onPlay, newSquare, gameOver, changeWinnerMessage}) => {

    //modify square component's value in X or O
    const handleClick = (i) => {
        if(squares[i].value || gameOver(squares) || !(gameStarted)){
            return;
        }
        (xIsNext) ? (newSquare[i].value = "X") : (newSquare[i].value = "O");
        onPlay(newSquare);
    }
    if (gameOver(squares)) {
        (gameOver(squares) === "Draw") ? changeWinnerMessage("Draw Match") :
        changeWinnerMessage("winner : " + gameOver(squares));
    }
    return (
        <div className=' bg-white backdrop-blur-lg bg-opacity-80 rounded-xl shadow-md shadow-black'>
            <div className='grid grid-cols-3'>
                {squares.map((square) => (
                    <Scare key={square.id} onSquareClick={() =>handleClick(square.id - 1)} value={square.value} style={square.style}  />
                ))}
            </div>
        </div>
    )
}

export default Table