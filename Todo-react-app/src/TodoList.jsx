import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

function TodoList() {
    const { state, dispatch } = useContext(TodoContext);
    const visibleTodos = state.todos;

    return (
        <div>
            <ul>
                {visibleTodos.length === 0 && <h1>Empty Todos!</h1>}
                {visibleTodos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                        />
                        {todo.text}
                        <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
