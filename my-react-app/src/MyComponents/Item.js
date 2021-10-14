import React from 'react'

export default function Item({item, onDelete}) {
    return (
        <div class="container">
            <p>{item.name}</p>
            <button type="button" class="btn btn-sm btn-danger" onClick={()=>onDelete(item)}>Delete</button>
        </div>
    )
}
