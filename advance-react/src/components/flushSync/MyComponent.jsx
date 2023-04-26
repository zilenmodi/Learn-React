import React from 'react'
import { useState } from 'react'
import { flushSync } from 'react-dom'
import Form from './Form'

const MyComponent = () => {
    const [data, setData] = useState({
        id: "",
        name: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        flushSync(() => {
            setData({ ...data, id: Math.ceil(Math.random() * 1000) })
            console.log("In FlushSync()");
        })
        // setData({ ...data, id: Math.ceil(Math.random() * 1000) })
        console.log(data);
    }
    console.log("Re render");
    return (
        <>
            <h1>MyComponent</h1>
            <Form handleSubmit={handleSubmit} setData={setData} data={data} />
        </>
    )
}

export default MyComponent