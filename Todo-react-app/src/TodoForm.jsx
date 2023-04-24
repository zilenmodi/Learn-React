import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { TodoContext } from './TodoContext';

function TodoForm() {
    const { state, dispatch } = useContext(TodoContext);
    const [isSubmit, setIsSubmit] = useState(false);
    const [todo, setTodo] = useState({
        id: "",
        text: "",
        completed: false,
    })

    useEffect(() => {
        setIsSubmit(false);
    }, [todo])

    useEffect(() => {
        setTodo((prev) => ({ ...prev, id: Math.ceil(Math.random() * 10000) }));
    }, [isSubmit])

    return (
        <>
            <form>
                <input
                    type="text"
                    value={todo.text}
                    onChange={(e) => setTodo((prev) => ({ ...prev, text: e.target.value }))}
                />
                <button onClick={(e) => {
                    e.preventDefault();

                    dispatch({ type: 'ADD_TODO', payload: todo })

                    setIsSubmit(true);

                    setTodo({
                        id: "",
                        text: "",
                        completed: false,
                    })
                }}>
                    Submit
                </button>
            </form>

        </>
    )
}

export default TodoForm;