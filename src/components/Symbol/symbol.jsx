import React, { useState, useEffect } from 'react';
import fetchStockDate from './symbolData'; // Ensure the import path is correct
import './symbol.css';
import {CircularProgress} from "@mui/joy";

function Symbol(props) {
    const [stockData, setStockData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {

            const data = await fetchStockDate(props.name);
            if (data) {
                setStockData(data[0]);

            }
        };

        fetchData();
    }, [props.name]);

    if (!stockData ) {
        return (
            <>
                <h3>{props.name}</h3>
                <p>Loading data <CircularProgress /></p>
            </>
        );
    }

    // Calculate change percentage
    const changePrecentage = (100 * stockData.price / stockData.prevValue - 100).toFixed(2);

    // Determine the color based on the value of changePrecentage
    const changeColor = changePrecentage > 0 ? 'green' : 'red';

    return (

        <>
            <h3>{props.name}</h3>
            <p>Current Price: {stockData.price}</p>

            <p style={{ color: changeColor }}>
                Change: {changePrecentage}%
            </p>
        </>
    );
}

export default Symbol;
