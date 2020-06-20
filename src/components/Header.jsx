import React from 'react'

export default function header(props) {
  return (
    <header>
      <div>
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className="score">
        <p>Score</p>  
          <p
            className={props.score === 0 ? "score-number" : props.score > 0 ? "score-number positive" : "score-number negative"}
          >{props.score}</p>
      </div>
    </header>
  )
}
