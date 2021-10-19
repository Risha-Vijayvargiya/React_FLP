import { useState } from "react";
import Header from "./MyComponents/Header";
import AddItem from "./MyComponents/AddItem";
import Cart from "./MyComponents/Cart";
import Footer from "./MyComponents/Footer";
import Home from "./MyComponents/Home";

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
            <Header title="Shop Here"/>
            <Home/>
            <AddItem addItem={addItem}/>
            <Cart items={items} onDelete={onDelete}/>
            <Footer/>
        </>
    )
}
export default App;