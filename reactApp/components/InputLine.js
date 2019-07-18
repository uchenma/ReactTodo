import React from "react"
import ReactDOM from "react-dom"

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

export default InputLine