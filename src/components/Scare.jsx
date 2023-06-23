import React from 'react'

const Scare = (props) => {
    return (
    <div>
        <button onClick={props.onSquareClick} className={' border-violet-700 bg-white bg-opacity-0 h-28 w-28 flex justify-center items-center text-3xl font-semibold hover:bg-opacity-80 '+ props.style}>{props.value}</button>
    </div>
  )
}

export default Scare