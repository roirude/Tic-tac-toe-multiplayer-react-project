import React, { useState } from 'react'
import Table from './Table'

const Game = () => {
    //create 9 components of <Scare />
    const squaresInit = [
        { id: 1, value: null, style: "border-b-2 border-r-2" },
        { id: 2, value: null, style: "border-b-2 border-r-2" },
        { id: 3, value: null, style: "border-b-2" },
        { id: 4, value: null, style: "border-b-2 border-r-2" },
        { id: 5, value: null, style: "border-b-2 border-r-2" },
        { id: 6, value: null, style: "border-b-2" },
        { id: 7, value: null, style: "border-r-2" },
        { id: 8, value: null, style: "border-r-2" },
        { id: 9, value: null}
    ];
    const [squares, setSquares] = useState(squaresInit);
    const [message, setMessage] = useState("Press Start");
    const [buttonMessage, setButtonMessage] = useState("Start");
    const [gameStarted, setGameStarted] = useState(false);
    const [xIsNext, setXIsNext] = useState(true);
    const [firstStarting, setFirstStarting] = useState(true);
    const newSquare = [...squares];

    // play control
    const handlePlay = (newSquare) => {
        (xIsNext) ? setMessage("player 2: 0") : setMessage("player 1: X");
        setSquares(newSquare);
        setXIsNext(!xIsNext);
    }

    // start game click
    const handleGameCLick = () => {
        if (firstStarting) {
            setGameStarted(true);
            setButtonMessage("ReStart");
            (xIsNext) ? setMessage("player 1: X") : setMessage("player 2: 0");
            setFirstStarting(false);
        } else {
            setSquares(squaresInit);
            setXIsNext(true);
            setMessage("player 1: X");
        }
    }

    //declared the winner
    const declaredWinner = (squaresTab) => {
        const winners = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i=0; i<winners.length; i++) {
            const [a ,b ,c] = winners[i];
            if(squaresTab[a].value && squaresTab[a].value === squaresTab[b].value && squaresTab[a].value === squaresTab[c].value) {
                return squaresTab[a].value;
            }
        }
        if (squaresTab.every((square) => square.value !== null)) {
            return "Draw";
          }
        return null;
    }

    return (
        <div className='flex flex-col gap-y-5'>
            <div className='bg-white h-14 rounded-md flex justify-center items-center text-xl bg-opacity-80 backdrop-blur-lg'>
                <p>{message}</p>
            </div>
            <div>
                <Table squares={squares} onPlay={handlePlay} gameStarted={gameStarted} xIsNext={xIsNext} newSquare={newSquare} gameOver={declaredWinner} changeWinnerMessage={setMessage}  />
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={handleGameCLick} className=' bg-gradient-to-t to-white from-cyan-500 w-36 h-14 text-2xl font-semibold uppercase hover:scale-105 duration-200 '>{buttonMessage}</button>
            </div>
        </div>
    )
}

export default Game