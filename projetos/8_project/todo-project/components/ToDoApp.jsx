import React, { useState } from "react"
import "./ToDoApp.css"

const ToDoApp = () => {
  // Lista de Tarefas
  const [todos, setTodos] = useState([])
  // Estado de texto da tarefas
  const [inputValue, setInputValue] = useState("")
  // Adicionar tarefa
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      }
      setTodos((prevTodos) => [...prevTodos, newTodo])

      setInputValue("")
    }
  }

  return (
    <div className="app-container">
      <h1 className="title">Lista de Tarefas</h1>
      {/* Formulário para adicionar tarefas */}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={inputValue}
          className="input-tasks"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adicionar
        </button>
      </form>
      {/* Lista de Tarefas */}
      {todos.length === 0 && (
        <p className="empty">Não há tarefas adicionadas.</p>
      )}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button className="delete-button">X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoApp
