import React, {useState} from 'react'
import './Task.css'

function Task(props){

    const [state, setState] = useState(props.todo)

    function handleChange(event){
        props.statusAction(!state.completed)

        setState(prevState => ({ 
            ...prevState,
            completed: !prevState.completed
        }))
    }

    let taskClass = state.completed ? "Task-task-completed" : "Task-task-pending"
    let taskHeaderClass =  state.completed ? "Task-taskHeader-completed" : "Task-taskHeader-pending"

    return(
        <div className={"Task-task " + taskClass} data-testid={"taskDiv" + state.id}>
            <div className={"Task-taskHeader " + taskHeaderClass} data-testid={"taskHeader" + state.id}>
                Task: {state.id}
            </div>
            <div className="Task-taskBody">
                <p>{state.title}</p>
                <input type="checkbox" onChange={ handleChange } checked={state.completed} data-testid={"taskCheckbox" + state.id} /> Completed
            </div>
        </div>
    )
}

export default Task