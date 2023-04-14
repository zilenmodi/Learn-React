import { memo } from "react";

function ChildComponent({ count, handleClickCount }) {
    console.log('Child Component render');
    return <>
        <h1>Count: {count}</h1>
        <button onClick={handleClickCount}>Increment</button>
    </>
}

export default memo(ChildComponent);