import TabStock from "../../../components/Symbol/tabStock";
import Symbol from "../../../components/Symbol/symbol";
import React, {useState} from "react";
import './tabStocks.css'

export default function TabStocks(){
    const [selectedStock,setSelectedStock] = useState()
    function handleSelect(selectStock){
        setSelectedStock(selectStock)

    }
    return(
        <section id = "tabStock">
        <h2>StockInformation</h2>
    <menu className="tab-stocks" >
        <TabStock isSelected={selectedStock==='AAPL'} onSelect={()=>handleSelect('AAPL')}>Apple</TabStock>
        <TabStock isSelected={selectedStock==='AMZN'} onSelect={()=>handleSelect('AMZN')}>Amazon</TabStock>
        <TabStock isSelected={selectedStock==='TSLA'} onSelect={()=>handleSelect('TSLA')}>Tesla</TabStock>
        <TabStock isSelected={selectedStock==='NVDA'} onSelect={()=>handleSelect('NVDA')}>Nvidia</TabStock>
        <TabStock isSelected={selectedStock==='GOOG'} onSelect={()=>handleSelect('GOOG')}>Google</TabStock>
        <TabStock isSelected={selectedStock==='META'} onSelect={()=>handleSelect('META')}>Facebook</TabStock>
    </menu>


    {!selectedStock ? undefined :
        <Symbol name ={selectedStock}/>}
</section>
    )
}