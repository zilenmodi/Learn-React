import React from 'react'

const Form = (props, ref) => {
    return (
        <>
            <form>
                <input ref={ref} />
            </form>
        </>
    )
}

export default React.forwardRef(Form)