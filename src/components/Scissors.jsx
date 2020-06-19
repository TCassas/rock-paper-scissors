import React from  'react'

export default function Scissors(props) {
    return (
        <div className="playButton scissors" onClick={props.handleClick}>
          <div className="scissors-icon">
          </div>
        </div>
    )
}
