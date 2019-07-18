import React from "react"
import ReactDOM from "react-dom"

class Todo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li>
                <button type="button" class="btn btn-info" value="">X</button>
                {this.props.task.completed? <strike>{this.props.task.taskText}</strike>: this.props.task.taskText}
            </li>
        )
    }
}


export default Todo