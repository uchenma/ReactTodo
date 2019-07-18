import React from "react"
import ReactDOM from "react-dom"
import TodoApp from './components/TodoApp';

let dummyData =[{taskText: "Cancel amazon subscription", completed: false},{taskText: "Buy new headphones", completed: false},{taskText: "Meal prep for next week", completed: true},{taskText:"Renew gym membership", completed: false}]







ReactDOM.render(<TodoApp />,
    document.getElementById('root'));