import React from  'react'

export default function Scissors(props) {
    return (
      <div 
        className={props.winner && props.winner !== 3 ? "playButton scissors winner" : "playButton scissors"} 
        onClick={props.handleClick}
      >
          <div className="scissors-icon">
          </div>
        </div>
    )
}
