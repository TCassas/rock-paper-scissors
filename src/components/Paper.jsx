import React from  'react'

export default function Paper(props) {
  return (
    <div 
      className={props.winner && props.winner !== 3 ? "playButton paper winner" : "playButton paper"} 
      onClick={props.handleClick}
    >
        <div className="paper-icon">
        </div>
      </div>
  )
}
