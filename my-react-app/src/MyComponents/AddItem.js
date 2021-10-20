import { useState } from "react";
import React from 'react'

export default function AddItem(props) {
    const [items, setItems] = useState("");

    const handleChange = (event) => {
    setItems(event.target.value)
    }

    const submit = (event)=>{
        event.preventDefault();
        const item = document.querySelector(".form-select");
        props.addItem(item.value);
        // console.log(items)
    }
    return (
        <div class="container">
            <form onSubmit={submit}>
                <select class="form-select" aria-label="Default select example" onChange={handleChange}>
                    {/* <option selected>Choose Item to add to Cart</option> */}
                    <option value="Bag">Bag</option>
                    <option value="Pen">Pen</option>
                    <option value="Pencil">Pencil</option>
                    <option value="Eraser">Eraser</option>
                    <option value="Sharpner">Sharpner</option>
                    <option value="Ruler">Ruler</option>
                    <option value="Protactor">Protactor</option>
                    <option value="Rounder">Rounder</option>
                    <option value="Wax Crayon">Wax Crayon</option>
                    <option value="Pencil Color">Pencil Color</option>
                    <option value="Red Pen">Red Pen</option>
                </select>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
