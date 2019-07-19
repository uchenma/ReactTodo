import React from "react"
import Todo from "./Todo"
// import ReactDOM from "react-dom"

class TodoList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul>
                {this.props.todos.map((todo,i)=> <Todo task={todo} xClick={()=>this.props.todoXClick(i)} toggleClick={()=>this.props.todoToggleClick(i)}/>)}
            </ul>
        )
    }  
}


export default TodoList