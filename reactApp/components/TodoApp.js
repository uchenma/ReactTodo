import React from "react"
import InputLine from "./InputLine"
import TodoList from "./TodoList"

// import ReactDOM from "react-dom"

let dummyData =[{taskText: "Cancel amazon subscription", completed: false},{taskText: "Buy new headphones", completed: false},{taskText: "Meal prep for next week", completed: true},{taskText:"Renew gym membership", completed: false}]



class TodoApp extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            todos: dummyData
        }
    }
    addTodo(stringTask){
        let newEntry = {
            taskText: stringTask,
            completed: false,
        }
        let connected = this.state.todos.concat(newEntry)
        this.setState({
            todos: connected
        })
    }
    removeTodo(index){
        const copyTodo = [...this.state.todos]
        copyTodo.splice(index,1)
        this.setState({
            todos: copyTodo
        })
    }
    componentDidMount(){
        this.setState({
            todos: dummyData
        })
    }
    render(){
        return(
            <div>
                <InputLine submit={(task)=>this.addTodo(task)}/>
                <TodoList todos={this.state.todos} todoXClick={(index)=>this.removeTodo(index)}/>
            </div>
        )
    }
}

export default TodoApp