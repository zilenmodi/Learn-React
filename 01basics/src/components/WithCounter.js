import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {

    function NewComponent() {
        const [count, setCount] = useState(20);
        return <OriginalComponent counter={count} increaseCounter={() => setCount((count) => count + 1)} />
    }
    return NewComponent;
};
export default UpdatedComponent;