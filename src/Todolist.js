import React, { useState } from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import List from './List'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
 
 

export default function Todolist() {
    const [ input, setinput ] = useState("")
    const [ items, setItems ] = useState([])
    const updatelist = (e) => {
        setinput(e.target.value)
    }

    const listitem= (e) => {
        setItems((olditems) => {
            return [...olditems, input]
        })

        setinput(" ")
    }

    const removeItems = (id) => {
        console.log("deleted")
        setItems((olditems) => {
            return olditems.filter((element,index) => {
                return index !== id ;
            })
        })
    }
    
    return (
        <div>
            <div className="maindiv">
                <div className="header">
                     <h1>Manage Your Tasks...</h1>
                </div> 
              <div className="box">
                <h2>Todo List</h2>
                <div className="list"> 
                    <input type="text"
                    placeholder="add a task"
                    className="input"
                    value={input}
                    onChange={ updatelist }
                    />
                    <AddBoxIcon  onClick={ listitem}   color='primary'  style={{ fontSize: 48 }} /> 
                </div>

                <div className="task">
                   { items.map((item,index) => {
                       return <List key={index}
                       id={index}
                        text={item}
                        onSelect={removeItems} />
                   })} 
                </div>

              </div>
            </div>
            
        </div>
    )
}
