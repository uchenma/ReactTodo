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
                        {this.props.task.completed? <em className="strike">{this.props.task.task}</em>: this.props.task.task}
                    </a>
                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={()=>this.props.xClick()}>X</button>
                </div>
            </li>
        )
    }
}


export default Todo