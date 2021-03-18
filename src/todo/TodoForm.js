import React, { useContext, useState } from 'react'
import { TodoContext } from '../provider/Context';

function TodoForm(props) {

    const [inputTodo, setTodo] = useState('')
    const { addTodo } = useContext(TodoContext)

    const onChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputTodo) {
            alert("Please enter valid todo")
        } else {
            addTodo(inputTodo)
            setTodo("")
        }
    }

    return (
        <div style={{ marginTop: 20 }}>
            <form onSubmit={handleSubmit}>
                <input value={inputTodo} type="text" placeholder="Please enter todo here" onChange={(e) => onChange(e)}></input>
                <button type="submit" style={{ marginLeft: 10 }}>Submit</button>
            </form>
        </div>)
}

export default TodoForm;