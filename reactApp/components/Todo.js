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
                    <a href="#" onClick={()=>this.props.toggleClick()}>
                        {this.props.task.completed? <strike>{this.props.task.taskText}</strike>: this.props.task.taskText}
                    </a>
                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={()=>this.props.xClick()}>X</button>
                </div>
            </li>
        )
    }
}


export default Todo