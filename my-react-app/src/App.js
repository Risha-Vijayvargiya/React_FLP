import { useState } from "react";
import Header from "./MyComponents/Header";
import Home from "./MyComponents/Home";
import Cart from "./MyComponents/Cart";
import Footer from "./MyComponents/Footer";

function App() {
    const addItem = (items)=>{
        const myItem = {
            items: items,
        }
        setItems([...items, myItem]);
    }
    const onDelete = (item)=>{
        setItems(items.filter((event)=>{
            return event!==item;
        }));
    }
    const [items, setItems] = useState([
        {name:'bag'},
        {name:'pen'},
        {name: 'bottle'},
        {name: 'eraser'},
    ]);
    return (
        <>
            <Header title="Shop Here"/>
            <Home addItem={addItem}/>
            <Cart items={items} onDelete={onDelete}/>
            <Footer/>
        </>
    )
}
export default App;