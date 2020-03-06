import React from "react"



export default function Button(props) {
    return <div>
        <button onClick={props.decrement}>Previous</button>
        <button>Edit</button>
        <button>Delete</button>
        <button>New</button>
        <button onClick={props.increment}>Next</button>
     </div>
    
}