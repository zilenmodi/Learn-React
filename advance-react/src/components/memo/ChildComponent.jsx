import React from 'react'

const ChildComponent = ({ listDummy }) => {
    console.log("ChildComponentRendering");
    return (
        <>
            <h3>Names</h3>
            {
                listDummy.map((name, i) => {
                    return <h6 key={i}>{name}</h6>
                })
            }
        </>
    )
}

export default React.memo(ChildComponent)