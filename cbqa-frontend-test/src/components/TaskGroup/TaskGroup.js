import React from 'react'
import Task from '../Task/Task'
import "./TaskGroup.css"

class TaskGroup extends React.Component{

    constructor(props){
        super(props)

        // Get number of completed tasks
        let count = props.todos.filter(t => t.completed).length

        this.state = {
            todos: props.todos,
            count: count,
            expanded: true
        }

        this.updateCount = this.updateCount.bind(this)
    }

    updateCount(completedFlag){
        let increment = completedFlag ? 1 : -1

        this.setState(prevState => ({
            todos: prevState.todos,
            count: prevState.count + increment,
            expanded: prevState.expanded
        }))
    }

    toggle(){
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }))
    }

    render(){
        return(
            <div className="TaskGroup-container">
                <div className={"TaskGroup-header " + (this.state.count == this.state.todos.length ? "TaskGroup-allCompleted" : "") }
                data-testid={"taskGroupHeader" + this.state.todos[0].userId}>
                    <div>UserId: {this.state.todos[0].userId}</div>
                    <div>{this.state.count}/{this.state.todos.length} completed</div>
                    <div>
                        <button className="TaskGroup-button" onClick={e => this.toggle()} 
                        data-testid={"taskGroupButton" + this.state.todos[0].userId}>
                            &#9776;
                        </button>
                    </div>
                </div>
                <div className="TaskGroup-tasks" style={{ display: this.state.expanded ? "" : "none"}}
                data-testid={"taskGroupTasksBttn" + this.state.todos[0].userId}>
                    { this.state.todos.map(t => <Task key={t.id} todo={t} statusAction={this.updateCount}></Task>) }
                </div>
           </div>
        )
    }

}

export default TaskGroup