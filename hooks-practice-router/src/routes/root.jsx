import React from 'react'
import { Outlet } from 'react-router-dom'


const Root = () => {
    return (
        <>
            <h1>root</h1>
            <Outlet />
        </>
    )
}

export const rootLoader = () => {
    return (
        <div>Root Loader</div>
    )
}

export default Root