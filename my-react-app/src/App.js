import { useState } from "react";
import Header from "./MyComponents/Header";
import AddItem from "./MyComponents/AddItem";
import Cart from "./MyComponents/Cart";
import Footer from "./MyComponents/Footer";
import Home from "./MyComponents/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
                        <>
                        <Home/>
                        </>)
                }}>
                </Route>
                <Route exact path="/React-FLP/add_item" render={()=>{
                    return(
                        <>
                        <AddItem addItem={addItem}/>
                        </>)
                }}>
                </Route>
                <Route exact path="/React-FLP/my_cart" render={()=>{
                    return(
                        <>
                        <Cart items={items} onDelete={onDelete}/>
                        </>)
                }}>
                </Route>                  
            </Switch>
            <Footer/>
        </Router>
        </>
    )
}
export default App;