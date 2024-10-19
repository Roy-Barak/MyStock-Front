import React from "react";
import Welcome from "./Welcome/welcome"
import IndexTable from "./MarketIndexTable/marketIndexTable"
import './index.css';
import TabStocks from "./TabStocks/tabStocks";
import Explanation from "./Explanation /explanation";

const Home = () => {


    return (
        <>
            <Welcome/>
            <Explanation/>
            <TabStocks/>
            <IndexTable/>

        </>
    )
}
export default Home;