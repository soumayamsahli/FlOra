import React from 'react'
import TodoItem from './ToDoItem'
import { useSelector } from 'react-redux'

function TodoList() {
    let todos = useSelector(state=>state);

    return (
        <div className="my-4">
            {todos.map((todo)=>   {
                return <TodoItem key={todos.id} todo={todo}/>;
            })}
        </div>
    )
}

export default TodoList
