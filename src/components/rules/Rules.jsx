import React from "react"
import { Spring } from 'react-spring/renderprops'

export default function Rules(props) {
    return (
        <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
        >
            {props2 => (
                <div style={props2}>
                    <div className="rulesCard">
                        <div className="rulesCard-header">
                            <p>Rules</p>
                            <div className="closeRules" onClick={props.handleClick}></div>
                        </div>
                        <div className="rulesCard-img">

                        </div>
                    </div>
                </div>
            )}
        </Spring>
    )
}