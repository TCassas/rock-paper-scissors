import React from  'react'

export default function Rock(props) {
  return (
      <div 
        className={props.winner && props.winner !== 3 ? "playButton rock winner" : "playButton rock"} 
        onClick={props.handleClick}
      >
        <div className="rock-icon">
        </div>
      </div>
  )
}
