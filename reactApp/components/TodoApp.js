import React from "react"
import InputLine from "./InputLine"
import TodoList from "./TodoList"
import axios from "axios"

const dbUrl = "http://localhost:3000/db";


class TodoApp extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            todos: []
        }
    }
    addTodo(stringTask){
        if (!stringTask){
            alert("Can't add an empty task!")
        } else{
            // post request to save to database
            axios.post(dbUrl +"/add",{
                task: stringTask,
                completed: false,
            })
            .then( (response)=> {
                console.log(response.data)
                this.setState({ 
                    todos: this.state.todos.concat(response.data)
                });
            })
            .catch((error)=> {
                console.log(error)
            });
        }
        
    }
    removeTodo(index, id){
        axios.post(dbUrl +"/remove",{
            id: id
        })
        .then( (response)=> {
            console.log(response.data)
            const copyTodo = [...this.state.todos]
            copyTodo.splice(index,1)
            this.setState({
                todos: copyTodo
            })
        })
        .catch((error)=> {
            console.log(error)
        });
    }
    toggleTodo(index, id){
        axios.post(dbUrl +"/toggle",{
            id: id
        })
        .then( (response)=> {
            console.log(response.data)
            let copyTodo = [...this.state.todos]
            copyTodo[index] = response.data
            this.setState({ 
                todos: copyTodo
            });
        })
        .catch((error)=> {
            console.log(error)
        });

    }
    componentDidMount(){
        axios.get(dbUrl + "/all")
            .then((response)=>{
                this.setState({ 
                    todos: this.state.todos.concat(response.data)
                });
            })
            .catch((error)=> {
                console.log(error)
            });
    }
    render(){
        return(
            <div>
                <InputLine submit={(task)=>this.addTodo(task)}/>
                <TodoList todos={this.state.todos} todoXClick={(index, id)=>this.removeTodo(index, id)} todoToggleClick={(index, id)=>this.toggleTodo(index, id)}/>
            </div>
        )
    }
}

export default TodoApp