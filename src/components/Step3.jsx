import React from 'react'
import Paper from './Paper'
import Rock from './Rock'
import Scissors from './Scissors'

export default function Step2() {
    return (
        <div className="step3">
            <div>
                <p>YOU PICKED</p>
                <Paper />
            </div>
            <div>
                <p className="result">YOU LOOSE</p>
                <p className="playAgain">PLAY AGAIN</p>
            </div>
            <div>
                <p>THE HOUSE PICKED</p>
                <Rock />
            </div>
        </div>
    )
}