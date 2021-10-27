import React, { Component } from 'react';
import { MyContext } from '../App';

export default class ContextApiExample extends Component {
    render() {
        return (
            <MyContext.Consumer>
            {(fname) => (
                <h1>Welcome {fname}</h1>
            )}
            </MyContext.Consumer>
        );
    };
}