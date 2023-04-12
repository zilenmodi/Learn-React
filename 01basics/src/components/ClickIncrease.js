import React from 'react'
import UpdatedComponent from './WithCounter.js'

const ClickIncrease = ({ counter, increaseCounter }) => {
    return (
        <div>
            <button onClick={() => increaseCounter()}>Increment</button>
            <p style={{ fontSize: counter }}>Size of font in onClick function: {counter}</p>
        </div>
    );
}

export default UpdatedComponent(ClickIncrease)