import React from "react"
import Todo from "./Todo"
// import ReactDOM from "react-dom"

class TodoList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.todos.map((todo,i)=> <Todo key={todo._id} task={todo} xClick={()=>this.props.todoXClick(i, todo._id)} toggleClick={()=>this.props.todoToggleClick(i, todo._id)}/>)}
            </div>
        )
    }  
}


export default TodoList