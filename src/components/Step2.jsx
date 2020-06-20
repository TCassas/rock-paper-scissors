import React from 'react'
import { Spring } from 'react-spring/renderprops'
import Paper from './Paper'
import Rock from './Rock'
import Scissors from './Scissors'

export default function Step2(props) {
    if(window.innerWidth > 976) {
        return (
            <div className="step3">
                {console.log(props.winner)}
                <div>
                    <Spring
                        from={{opacity: 0, marginLeft: -50}}
                        to={{opacity: 1, marginLeft: 0}}
                    >
                        {props2 => (
                            <div style={props2}>
                                <p>YOU PICKED</p>
                                {props.choiceP1 === 1 ? <Rock winner={props.winner === 1 ?  props.winner : undefined}/> : undefined}
                                {props.choiceP1 === 2 ? <Paper winner={props.winner === 1 ?  props.winner : undefined}/> : undefined}
                                {props.choiceP1 === 3 ? <Scissors winner={props.winner === 1 ?  props.winner : undefined}/> : undefined}
                            </div>
                        )}
                    </Spring>
                </div>
                <div>
                    <p className="result">
                        {props.winner === 1 ? "YOU WON" : undefined}
                        {props.winner === 2 ? "YOU LOOSE" : undefined}
                        {props.winner === 3 ? "TIE" : undefined}
                    </p>
                    <p className="playAgain" onClick={props.handleClick}>PLAY AGAIN</p>
                </div>
                <div>
                    <Spring
                        from={{opacity: 0, marginRight: -50}}
                        to={{opacity: 1, marginRight: 0}}
                    >
                        {props3 => (
                            <div style={props3}>
                                <p>THE HOUSE PICKED</p>
                                {props.choiceP2 === 1 ? <Rock winner={props.winner === 2 ?  props.winner : undefined}/> : undefined}
                                {props.choiceP2 === 2 ? <Paper winner={props.winner === 2 ?  props.winner : undefined}/> : undefined}
                                {props.choiceP2 === 3 ? <Scissors winner={props.winner === 2 ?  props.winner : undefined}/> : undefined}
                            </div>
                        )}
                    </Spring>
                </div>
            </div>
        )
    } else {
        return (
            <div className="step3-2">
                <div className="first">
                    <Spring
                        from={{opacity: 0, marginLeft: -50}}
                        to={{opacity: 1, marginLeft: 0}}
                    >
                        {props2 => (
                            <div style={props2}>
                                <p>YOU PICKED</p>
                                {props.choiceP1 === 1 ? <Rock winner={props.winner === 1 ?  props.winner : undefined}/> : undefined}
                                {props.choiceP1 === 2 ? <Paper winner={props.winner === 1 ?  props.winner : undefined}/> : undefined}
                                {props.choiceP1 === 3 ? <Scissors winner={props.winner === 1 ?  props.winner : undefined}/> : undefined}
                            </div>
                        )}
                    </Spring>
                    <Spring
                        from={{opacity: 0, marginRight: -50}}
                        to={{opacity: 1, marginRight: 0}}
                    >
                        {props3 => (
                            <div style={props3}>
                                <p>THE HOUSE PICKED</p>
                                {props.choiceP2 === 1 ? <Rock winner={props.winner === 2 ?  props.winner : undefined}/> : undefined}
                                {props.choiceP2 === 2 ? <Paper winner={props.winner === 2 ?  props.winner : undefined}/> : undefined}
                                {props.choiceP2 === 3 ? <Scissors winner={props.winner === 2 ?  props.winner : undefined}/> : undefined}
                            </div>
                        )}
                    </Spring>
                </div>
                <div className="second">
                    <p className="result">
                        {props.winner === 1 ? "YOU WON" : undefined}
                        {props.winner === 2 ? "YOU LOOSE" : undefined}
                        {props.winner === 3 ? "TIE" : undefined}
                    </p>
                    <p className="playAgain" onClick={props.handleClick}>PLAY AGAIN</p>
                </div>
            </div>
        )
    }
}