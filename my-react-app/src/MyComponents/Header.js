import React from 'react'
import propTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function Header(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/React-FLP/">{props.title}</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/React-FLP/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/React-FLP/add_item">Add Item</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/React-FLP/my_cart">My Cart</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.propTypes = {
    title: propTypes.string
}