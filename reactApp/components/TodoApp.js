import React from "react"
import InputLine from "./InputLine"
import TodoList from "./TodoList"

// import ReactDOM from "react-dom"

class TodoApp extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            todos:[{taskText: "Cancel amazon subscription", completed: false},{taskText: "Buy new headphones", completed: false},{taskText: "Meal prep for next week", completed: true},{taskText:"Renew gym membership", completed: false}],
        }
    }
    // componentDidMount(data){
    //     this.setState({
    //         todos: this.state.todos.push(data)
    //     })
    // }
    render(){
        return(
            <div>
                <InputLine/>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}

export default TodoApp