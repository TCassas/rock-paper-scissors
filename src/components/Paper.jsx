import React from  'react'

export default function Paper(props) {
    return (
        <div className="playButton paper" onClick={props.handleClick}>
          <div className="paper-icon">
          </div>
        </div>
    )
}
