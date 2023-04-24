import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const App = () => {
  return (
    <>
      <h1>To-do List</h1>
      <TodoForm />
      <TodoList />
    </>
  )
}

export default App