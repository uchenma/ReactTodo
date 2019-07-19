import React from "react"
import InputLine from "./InputLine"
import TodoList from "./TodoList"

// import ReactDOM from "react-dom"

let dummyData =[{task: "Cancel amazon subscription", completed: false},{task: "Buy new headphones", completed: false},{task: "Meal prep for next week", completed: true},{task:"Renew gym membership", completed: false}]



class TodoApp extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            todos: dummyData
        }
    }
    addTodo(stringTask){
        if (!stringTask){
            alert("Can't add an empty task!")
        } else{
            let newEntry = {
                task: stringTask,
                completed: false,
            }
            let connected = this.state.todos.concat(newEntry)
            this.setState({
                todos: connected
            })
        }
    }
    removeTodo(index){
        const copyTodo = [...this.state.todos]
        copyTodo.splice(index,1)
        this.setState({
            todos: copyTodo
        })
    }
    toggleTodo(index){
        const toggle = !(this.state.todos[index].completed)
        const copyTodo = [...this.state.todos]
        copyTodo[index].completed = toggle
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
                <TodoList todos={this.state.todos} todoXClick={(index)=>this.removeTodo(index)} todoToggleClick={(index)=>this.toggleTodo(index)}/>
            </div>
        )
    }
}

export default TodoApp