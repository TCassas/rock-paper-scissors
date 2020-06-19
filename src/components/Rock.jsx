import React from  'react'

export default function Rock(props) {
    return (
        <div className="playButton rock" onClick={props.handleClick}>
          <div className="rock-icon">
          </div>
        </div>
    )
}
