import React from 'react'

const Form = ({ handleSubmit, data, setData }) => {
    return (
        <form>
            <input type="text" value={data.name} onChange={(e) => (setData({ ...data, name: e.target.value }))} />
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form