import React, { Component } from 'react'
export const TodoContext = React.createContext();

export class TodoProvider extends Component {
    state = {
        todos: []
    }

    addTodo = (todo) => {
        let todos = [...this.state.todos, { id: this.state.todos.length + 1, item: todo, complete: false }];
        this.setState({ todos: todos })
    }

    removeTodo = (id) => {
        let { todos } = this.state;
        const records = todos.filter(f => f.id !== id)
        this.setState({ todos: records })
    }
    
    toggleTodo = (id) => {
        let { todos } = this.state;
        let records = todos.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
          });
        this.setState({ todos: records })
    }

    render() {
        const { todos } = this.state;
        const { addTodo, removeTodo, toggleTodo } = this;

        return (
            <TodoContext.Provider
                value={{ todos, addTodo, removeTodo, toggleTodo }}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}