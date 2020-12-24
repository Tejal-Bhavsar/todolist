import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


export default function List(props) {

   
    return (
        <div>
            <div className='items'>
                <li> <DeleteForeverIcon
                style={{fontSize:"32", marginRight:"1rem"}
                } 
                color="secondary" 
                onClick={() => {
                    props.onSelect(props.id)
                }}
                /> {props.text} </li>
            </div>
        </div>
    )
}
