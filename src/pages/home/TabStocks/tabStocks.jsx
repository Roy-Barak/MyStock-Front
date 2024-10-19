import React from "react";
import './tabStocks.css'
import TabStock from "../../../components/Symbol/tabStock";

export default function TabStocks() {

    return (
        <section id="tabStock">
            <div className="tab-stocks-animation">

            </div>
            <h2>StockInformation</h2>
            <div className="tab-stocks">
                <TabStock stock={"AAPL"}>Apple</TabStock>
                <TabStock stock={"AMZN"}>Amazon</TabStock>
                <TabStock stock={"TSLA"}>Tesla</TabStock>
                <TabStock stock={"NVDA"}>Nvidia</TabStock>
                <TabStock stock={"GOOG"}>Google</TabStock>
                <TabStock stock={"META"}>Facebook</TabStock>
            </div>
            <div className="tab-stocks tab-search">
                <TabStock isItSearch={true}></TabStock>
            </div>
        </section>
    )
}