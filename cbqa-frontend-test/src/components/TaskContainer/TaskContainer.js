import React from 'react'
import TaskGroup from '../TaskGroup/TaskGroup'
import './TaskContainer.css'

class TaskContainer extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            todos: props.todos
        }
    }

    groupTodosByUser(todos){
        let todosByUser = {}

        // Separate todos by userId, storing each list of todos in a property of todosByUser object
        todos.forEach(todo => {
            if(!todosByUser.hasOwnProperty(todo.userId))
                todosByUser[todo.userId] = []

            todosByUser[todo.userId].push(todo)
        })

        return todosByUser
    }

    render(){
        let todosByUser = this.groupTodosByUser(this.state.todos)
        let taskGroupList = [];

        for(const key in todosByUser)
            taskGroupList.push(<TaskGroup key={key} todos={todosByUser[key]}></TaskGroup>)

        return(
            <div className="TaskContainer-container">
                { taskGroupList }
            </div>
        )
    }

}

export default TaskContainer