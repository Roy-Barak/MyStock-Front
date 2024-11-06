import React, {useEffect, useState} from 'react';
import fetchStockDate from './symbolData'; // Ensure the import path is correct
import './symbol.css';
import {CircularProgress} from "@mui/joy";

function Symbol(props) {
    const [stockData, setStockData] = useState(null);


    useEffect(() => {

        const fetchData = async () => {

            const data = await fetchStockDate(props.name);
            console.log(data)

            if (data) {
                setStockData(data[0].price !== null ? data[0] : data[1]);

            } else {
                console.error("No data received");
            }
        };

        fetchData();
    }, [props.name]);

    if (!stockData) {
        return (
            <>
                <h3>{props.name}</h3>
                <p>Loading data <CircularProgress/></p>
            </>
        );
    }

    const prevValue = stockData.prevValue || stockData.previousClose;

    // Calculate change percentage
    const changePrecentage = (100 * stockData.price / prevValue - 100).toFixed(2);

    // Determine the color based on the value of changePrecentage
    const changeColor = changePrecentage > 0 ? '#28a745' : '#dc3545';

    return (
        <div className="symbol">
            <h3 className="symbol-title">{props.name}</h3>
            {stockData.price !== undefined ? (
                <>
                    <p className="symbol-price">Price: {stockData.price}</p>
                    <p className="symbol-change" style={{color: changeColor}}>
                        {changePrecentage}%
                    </p>
                </>
            ) : (
                <p>Couldn't find this symbol</p>
            )}

        </div>
    );
}

export default Symbol;
