import React from "react"
import ReactDOM from "react-dom"

let dummyData =[{taskText: "Cancel amazon subscription", completed: false},{taskText: "Buy new headphones", completed: false},{taskText: "Meal prep for next week", completed: true},{taskText:"Renew gym membership", completed: false}]

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
class TodoList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul>
                {dummyData.map((todo)=> <Todo task={todo}/>)}
            </ul>
        )
    }  
}
class InputLine extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="input form-inline">
                <input className="form-control"type="text" vale="" placeholder="enter"/>
                <button type="button" class="btn btn-success form-button">Submit</button>
            </div>
        )
        
    } 
}
class TodoApp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <InputLine/>
                <TodoList/>
            </div>
        )
    }
}



ReactDOM.render(<TodoApp />,
    document.getElementById('root'));