import React from "react"
import ReactDOM from "react-dom"

class Todo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li>
                <div className="input form-inline">
                    <button type="button" className="btn btn-info" onClick={()=>this.props.xClick()}>X</button>
                    <a href="#">
                        {this.props.task.completed? <strike>{this.props.task.taskText}</strike>: this.props.task.taskText}
                    </a>
                </div>
            </li>
        )
    }
}


export default Todo