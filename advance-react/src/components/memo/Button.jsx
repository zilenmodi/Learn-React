import React from 'react'

const Button = ({ text, handleToggle, handleCount }) => {
    console.log("ButtonRendering", text);
    return (
        <button onClick={text === "Toggle" ? handleToggle : handleCount}>{text}</button>
    )
}

export default React.memo(Button)