import React from "react";
import './tabStocks.css'
import TabStock from "../../../components/Symbol/tabStock";
import stockInformationImg from "../../../assests/images/stockInfomration.png"

export default function TabStocks() {

    return (
        <section className="tabStocks">
            <img src={stockInformationImg} className="tabStocks-img"/>
            <div className="tab-stocks-animation">

            </div>
            <h2 className="tabStock-title">StockInformation</h2>
            <div className="tab-stocks">
                <TabStock stock={"AAPL"}>Apple</TabStock>
                <TabStock stock={"AMZN"}>Amazon</TabStock>
                <TabStock stock={"TSLA"}>Tesla</TabStock>
                <TabStock stock={"NVDA"}>Nvidia</TabStock>
                <TabStock stock={"GOOG"}>Google</TabStock>
                <TabStock stock={"META"}>Facebook</TabStock>
            </div>
            <div className="tab-search">
                <TabStock isItSearch={true}></TabStock>
            </div>
        </section>
    )
}