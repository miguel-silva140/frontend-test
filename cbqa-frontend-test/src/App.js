import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import TaskContainer from './components/TaskContainer/TaskContainer'
import Footer from './components/Footer/Footer'

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            isLoading: true,
            todos: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                    todos: data
                })
            })
    }

    render(){
        return(
            <div>
                <Header></Header>
                {
                    this.state.isLoading 
                        ? <div className="App-loadingDiv">Loading Data...</div> 
                        : <TaskContainer todos={this.state.todos} data-testid="taskContainer"></TaskContainer>
                }
                <Footer></Footer>
            </div>
        )
    }

}

export default App;
