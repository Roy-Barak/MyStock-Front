import React from "react";
import Welcome from  "./Welcome/welcome"
import IndexTable from "./MarketIndexTable/marketIndexTable"
import './index.css';
import TabStocks from "./TabStocks/tabStocks";
import TabStockSearch from "./TabStocks/tabStockSearch";
const Home = () =>{


    return(
        <>
            <Welcome/>

           <TabStocks/>
            <TabStockSearch/>
            <IndexTable/>

        </>
    )
}
export default Home;