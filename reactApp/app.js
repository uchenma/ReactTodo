import React from "react"
import ReactDOM from "react-dom"

let dummyData =["Cancel amazon subscription", "Buy new headphones", "Meal prep for next week", "Renew gym membership"]

class Todo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li>
                <input type="submit" value="X"></input>
                {this.props.task}
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
    
}
class TodoApp extends React.Component{
    
}



ReactDOM.render(<TodoList/>,
    document.getElementById('root'));