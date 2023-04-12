import React from 'react'
import UpdatedComponent from './WithCounter.js'


const HoverIncrease = ({ counter, increaseCounter }) => {
    return (
        <div>
            <button onMouseOver={() => increaseCounter()}>Increment</button>
            <p style={{ fontSize: counter }}>
                Size of font in onMouseOver function: {counter}
            </p>
        </div>
    );
}

export default UpdatedComponent(HoverIncrease)