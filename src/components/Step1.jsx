import React from 'react'
import { Spring } from 'react-spring/renderprops'
import Paper from './Paper'
import Rock from './Rock'
import Scissors from './Scissors'

export default function Step1(props) {
    return (
        <div className="buttonsContainer">
            <div className="upperButtons">
                <Spring
                    from={{opacity: 0, marginLeft: -50}}
                    to={{opacity: 1, marginLeft: 0}}
                >
                    {props2 => (
                        <div style={props2}>
                            <Paper handleClick={props.handleClick}/>
                        </div>
                    )}
                </Spring>

                <Spring
                    from={{opacity: 0, marginRight: -50}}
                    to={{opacity: 1, marginRight: 0}}
                >
                    {props2 => (
                        <div style={props2}>
                            <Scissors handleClick={props.handleClick}/>
                        </div>
                    )}
                </Spring>
            </div>
            <div>
                <Spring
                    from={{opacity: 0, marginBottom: -50}}
                    to={{opacity: 1, marginBottom: 0}}
                >
                    {props2 => (
                        <div style={props2}>
                            <Rock handleClick={props.handleClick}/>
                        </div>
                    )}
                </Spring>
            </div>
        </div>
    )
}