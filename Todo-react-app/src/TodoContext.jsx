import React, { createContext, useReducer } from 'react';

const initialState = {
    todos: JSON.parse(localStorage.getItem('todoLists')) || [],
    filter: 'all',
};

export const TodoContext = createContext();

export const todoReducer = (state, action) => {
    let newTodoLists;
    switch (action.type) {
        case 'ADD_TODO':
            newTodoLists = [...state.todos, action.payload]
            localStorage.setItem('todoLists', JSON.stringify(newTodoLists));
            return { ...state, todos: newTodoLists };
        case 'DELETE_TODO':
            newTodoLists = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem('todoLists', JSON.stringify(newTodoLists));
            return {
                ...state,
                todos: newTodoLists
            };
        case 'TOGGLE_TODO':
            newTodoLists = state.todos.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            localStorage.setItem('todoLists', JSON.stringify(newTodoLists));
            return {
                ...state,
                todos: newTodoLists
            };
        default:
            return state;
    }
};

export const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    );
};
