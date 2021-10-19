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
                    <option value="Bag" id="item">Bag</option>
                    <option value="Pen" id="item">Pen</option>
                    <option value="Pencil" id="item">Pencil</option>
                    <option value="Eraser" id="item">Eraser</option>
                    <option value="Sharpner" id="item">Sharpner</option>
                    <option value="Ruler" id="item">Ruler</option>
                    <option value="Protactor" id="item">Protactor</option>
                    <option value="Rounder" id="item">Rounder</option>
                    <option value="Wax Crayon" id="item">Wax Crayon</option>
                    <option value="Pencil Color" id="item">Pencil Color</option>
                    <option value="Red Pen" id="item">Red Pen</option>
                </select>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
