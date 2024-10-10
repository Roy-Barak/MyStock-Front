// src/components/MarketIndexTable.js
import React, { useState, useEffect } from 'react';
import './marketIndexTable.css';
import {LinearProgress} from "@mui/joy";
import fetchStockDate from "../../../components/Symbol/symbolData"; // Import CSS for MarketIndexTable styles

export default function MarketIndexTable (){
    const [indicesData, setIndicesData] = useState([]);

    useEffect(() => {
        const fetchIndicesData = async () => {
            const indices = ["%5EGSPC", "%5EDJI", "%5EIXIC", "%5EFTSE", "%5EGDAXI", "%5EFCHI"];
            const fetchedData = await Promise.all(indices.map(index => fetchStockDate(index)));
            setIndicesData(fetchedData);
        };

        fetchIndicesData();
    }, []);


    return (
        <div id="spUpdates">
            <h2>Market Index</h2>
            <table id="stockTable">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Current Value</th>
                    <th>Previous Value</th>
                    <th>Change %</th>
                </tr>
                </thead>
                <tbody>
                {indicesData.map((data, index) => {
                    if (data) {
                        const changePercent = ((data[1].price / data[1].prevValue - 1) * 100).toFixed(2);
                        return (
                            <tr key={index}>
                                <td>{data[1].name}</td>
                                <td>{data[1].price}</td>
                                <td>{data[1].prevValue}</td>
                                <td style={{ color: changePercent >= 0 ? 'green' : 'red' }}>
                                    {changePercent}%
                                </td>
                            </tr>
                        );
                    } else {
                        return (
                            <tr key={index}>
                                <td colSpan="4"><LinearProgress /> </td>
                            </tr>
                        );
                    }
                })}
                </tbody>
            </table>
        </div>

    );
};


