import React from "react"
import ReactDOM from "react-dom"

class InputLine extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            typedText: ""
        }
    }
    handleTyping(event){
        this.setState({typedText: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.submit(this.state.typedText)
        this.setState({
            typedText: ""
        })
    }
    
    render(){
        console.log(this.props.submit)
        return(
            <div>
                <h2>All Tasks: Do dem</h2>
                <div className="input form-inline">
                    <input className="form-control" type="text" placeholder="Enter a task boi!" onChange={(event)=>this.handleTyping(event)} value={this.state.typedText}/>
                    <button type="submit" className="btn btn-success form-button" onClick={(event)=>this.handleSubmit(event)}>Submit</button>
                </div>
            </div>
            
        )
        
    } 
}

export default InputLine