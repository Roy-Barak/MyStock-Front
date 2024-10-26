import React, {useEffect, useState} from 'react';
import './marketIndexTable.css';
import {LinearProgress} from "@mui/joy";
import fetchStockDate from "../../../components/Symbol/symbolData"; // Import CSS for MarketIndexTable styles

export default function MarketIndexTable() {
    const [indicesData, setIndicesData] = useState([]);

    useEffect(() => {
        const fetchIndicesData = async () => {
            const indices = [
                "%5EGSPC", // S&P 500
                "%5EDJI",  // Dow Jones Industrial Average
                "^NYA",    // NYSE Composite
                "^OEX",    // S&P 100
                "%5EIXIC", // NASDAQ Composite
                "%5EFTSE", // FTSE 100
                "%5EGDAXI", // DAX
                "%5EFCHI", // CAC 40
                "%5EIBEX", // IBEX 35
                "%5EOMX",  // OMX Stockholm 30
                "%5EHSI",  // Hang Seng Index
                "%5EJKSE", // Jakarta Composite
                "%5ETWII", // Taiwan Weighted
            ];
            const fetchedData = await Promise.all(indices.map(index => fetchStockDate(index)));
            setIndicesData(fetchedData);
            console.log(fetchedData);
        };

        fetchIndicesData();
    }, []);

    return (
        <div className="indexTable">
            <h2 className="indexTable-title">Market Index</h2>
            <table id="stockTable">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Current Value</th>
                    <th>Previous Value</th>
                    <th>Change %</th>
                    <th>Day Low</th>
                    <th>Day High</th>
                    <th>52 Week Low</th>
                    <th>52 Week High</th>
                    <th>Average Volume</th>
                </tr>
                </thead>
                <tbody>
                {indicesData.map((data, index) => {
                    if (data) {
                        const currentPrice = data[1].price // Use optional chaining
                        const previousClose = data[1].previousClose;
                        const changePercent = ((currentPrice / previousClose - 1) * 100).toFixed(2);

                        return (
                            <tr key={index}>
                                <td>{data[1].name}</td>
                                <td>{currentPrice}</td>
                                <td>{previousClose}</td>
                                <td style={{color: changePercent >= 0 ? '#28a745' : 'red'}}>
                                    {changePercent}%
                                </td>
                                <td>{data[1]?.dayLow?.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }) || "N/A"}</td>
                                <td>{data[1]?.dayHigh?.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }) || "N/A"}</td>
                                <td>{data[1]?.fiftyTwoWeekLow?.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }) || "N/A"}</td>
                                <td>{data[1]?.fiftyTwoWeekHigh?.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }) || "N/A"}</td>
                                <td>{data[1]?.averageVolume?.toLocaleString() || "N/A"}</td>
                            </tr>
                        );
                    } else {
                        return (
                            <tr key={index}>
                                <td colSpan="9"><LinearProgress/></td>
                            </tr>
                        );
                    }
                })}
                </tbody>
            </table>
        </div>
    );
}
