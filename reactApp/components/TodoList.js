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
                {this.props.todos.map((todo)=> <Todo task={todo}/>)}
            </ul>
        )
    }  
}


export default TodoList