import React from 'react';
import { useEffect, useContext, useReducer} from 'react';
import { UserContext } from '../App';

export default function HooksExample() {
    const initialCount = 0;
    const reducer = (count, action) => {
        switch (action) {
            case "add":
                return count + 1;
            case "reset":
                return 0;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialCount);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `React App clicked ${count} times`;
      });
    const user = useContext(UserContext)
    return (
        <div>
           <p>You clicked {count} times</p>
            <button onClick={() => dispatch("add")}>Click me</button> 
            <button onClick={() => dispatch("reset")}>Reset</button>
            <div>User context value {user}</div>
        </div>
    )
}
