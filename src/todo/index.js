import React from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function Todo(props) {
    return (
        <div style={{ textAlign: 'center' }}>
            <TodoForm />
            <TodoList />
        </div>)
}

export default Todo;