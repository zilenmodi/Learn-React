import React from 'react'
import { useRef } from 'react'
import Form from './Form';

const MyComponent = () => {
    const inputRef = useRef();
    const handleFocus = () => {
        inputRef.current.focus()
    }
    return (
        <>
            <h1>MyComponent</h1>
            <Form ref={inputRef} />
            <button onClick={handleFocus}>Focus</button>
        </>
    )
}

export default MyComponent