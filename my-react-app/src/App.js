import { useState } from "react";
import Header from "./MyComponents/Header";
import AddItem from "./MyComponents/AddItem";
import Cart from "./MyComponents/Cart";
import Footer from "./MyComponents/Footer";
import Home from "./MyComponents/Home";
import {createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./MyComponents/rootReducer";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// const initialState = {
//     count: 50,
// };
export function reducer(state={count:50}, action) {
    switch (action.type) {
        case "ADD":
            return {
                count: state.count +1
            };
        case "SUB":
            return {
                count: state.count -1
            };
        default:
            return state;
    }
}
const store = createStore(rootReducer, applyMiddleware(thunk));

export const UserContext = React.createContext()

function App() {
    const [items, setItems] = useState([
        {name:'bag'},
        {name:'pen'},
        {name: 'bottle'},
        {name: 'eraser'},
    ]);
    const addItem = (item)=>{
        const myItem = {
            name: item,
        }
        setItems([...items, myItem]);
    }
    const onDelete = (item)=>{
        setItems(items.filter((event)=>{
            return event!==item;
        }));
    }
    return (
        <>
        <Router>
            <Header title="Shop Here"/>
            <Switch>
                <Route exact path="/React-FLP/" render={()=>{
                    return(
                        <Provider store={store}>
                        <UserContext.Provider value={'Risha'}>
                        <Home/>
                        </UserContext.Provider>
                        </Provider>
                    )
                }}>
                </Route>
                <Route exact path="/React-FLP/add_item" render={()=>{
                    return(
                        <AddItem addItem={addItem}/>
                    )
                }}>
                </Route>
                <Route exact path="/React-FLP/my_cart" render={()=>{
                    return(
                        <Cart items={items} onDelete={onDelete}/>
                    )
                }}>
                </Route>                 
            </Switch>
            <Footer/>
        </Router>
        </>
    )
}
export default App;