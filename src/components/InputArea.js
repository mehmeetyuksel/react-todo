import React from 'react'
import '../App.css';
import {useState, useEffect} from "react"

function InputArea({addState, actions}) {

    const [state, setState] = useState({name : "", isDone:false})

    const onChangeEvent = (e) => {  
         setState({name: e.target.value, isDone: false})    
    }

    useEffect(() => {
        setState({name : "", isDone:false})
    }, [actions])

    const handleClick = (e) => {
        e.preventDefault()
        if(state.name.trim() === "") {
            return false
        }
        addState([...actions,state])
      
    }
 
    return (
        <div className="container"> 
        <form onSubmit={handleClick} id="input-form">
          <input name="name" className="form-control form-control-sm input" placeholder="What needs to be done?" 
         onChange={onChangeEvent} value = {state.name}/> <br/>
         <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-block btn-warning">Submit</button>
          </div>
        </form>
        </div>
    )
}

export default InputArea
