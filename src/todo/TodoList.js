import React, { useContext } from 'react'
import { TodoContext } from '../provider/Context';

function TodoList(props) {
    const { todos, removeTodo, toggleTodo } = useContext(TodoContext)

    const onRemove = (event, id) => {
        event.stopPropagation()
        removeTodo(id)
    }

    const onHandleToggle = (event, id) => {
        event.stopPropagation();
        toggleTodo(id)
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h2>Todo List</h2>
            {
                todos.length > 0 ? todos.map((todo, index) =>
                    <ul key={index}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <li onClick={(e) => onHandleToggle(e, todo.id)} style={{ cursor: 'pointer', textDecoration: todo.complete ? 'line-through' : 'none' }}
                            >{todo.item}</li>
                            <button type="button" onClick={(e) => onRemove(e, todo.id)} style={{ marginLeft: 10 }}>Remove</button>

                        </div>
                    </ul>
                ) : <span>No todos found</span>
            }
        </div>
    )
}

export default TodoList;