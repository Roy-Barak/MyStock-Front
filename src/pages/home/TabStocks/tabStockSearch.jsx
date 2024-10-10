import TabStock from "../../../components/Symbol/tabStock";
import Symbol from "../../../components/Symbol/symbol";
import React, {useState} from "react";
import './tabStockSearch.css'


export default function TabStockSearch(){
    const [inputStock,setInputStock] = useState()
    const [click,setClick] = useState(false)
    function handleInput(event){
        setInputStock(event.target.value.toUpperCase())
        setClick(false)

    }
    function handleClick(){
        setClick(true)
    }
    return(
        <section id = "tab-stock-search">
            <h2>Search for Stock Information</h2>
            <input placeholder="Enter stock symbol" type="text"  required value={inputStock} onChange={handleInput}/>
            <button onClick={handleClick}>Search</button>

            {click && <Symbol name ={inputStock}/>}
        </section>
    )
}