import React from 'react'
import Item from './Item'

export default function Cart(props) {
    let myStyle = {
        minHeight: "70vh"
    }
    return (
        <div class="container" style={myStyle}>
            <h3>Items in your Cart</h3>
            {props.items.length===0? "No items to display":
            props.items.map((item)=>{
                return <Item item={item} onDelete={props.onDelete}/>
            })
            }
        </div>
    )
}
