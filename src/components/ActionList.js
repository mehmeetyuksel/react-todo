import React, {useEffect, useState} from 'react'
import '../App.css';

function ActionList({actions, changeActions}) {

    const [showActive, setShowActive] = useState(false)
    
   const removeHandle = (actionName) => {    
       let newArr = actions.filter(action => action !== actionName)
       changeActions(newArr)
   }
   const isDoneHandle = (i) => {
        let newArr = [...actions]
        newArr[i].isDone = !newArr[i].isDone
        changeActions(newArr)

   }
   useEffect(() => {
    console.log(actions)
}, [actions])
 
    return (
        <div className="container">
        <div  className="itemList">
            {actions.map((action, i) => 
            action.name !== "" & action.isDone === showActive ?
                <div className="items" key={i}>
                <div>
                <p className="fs-5">{i}) {action.name}</p>
                </div>
                <div>
                {action.isDone ? <button className="btn btn-warning" style={{marginRight: "10px"}}  onClick={() => isDoneHandle(i)}>Uncomplete</button> : <button className="btn btn-success" style={{marginRight: "10px"}} onClick={() => isDoneHandle(i)}>Complete</button>}
                <button className="btn btn-danger ml-4" onClick={() => removeHandle(action)}>Remove</button>
                 </div> 
                </div>
                 : undefined
               
            )}
        <h3>{actions.filter(action => action.isDone === showActive).length === 0 ? "No items" : showActive ? `${actions.filter(action => action.isDone === showActive).length} items done` : `${actions.filter(action => action.isDone === showActive).length} items left to do.` } </h3>
            </div>
            
        <button onClick={() => setShowActive(false)} className="btn btn-outline-warning" style={{marginRight: "15px"}}>Show Uncompleted Todos</button>
        <button onClick={() => setShowActive(true)}  className="btn btn-outline-warning">Show Completed Todos</button>
        </div>
    )
}

export default ActionList
