import './buyAndSell.css'
import {useState} from "react";
import '../../assests/stocksList/stocksList'
import stocksList from "../../assests/stocksList/stocksList";
import fetchStockDate from "../Symbol/symbolData";

export function BuyAndSell({portfolioStocksList, toSell, toBuy, action, handleExit}) {
    const [stockInput, setStockInput] = useState({
        "symbol": '',
        "shares": ''
    });
    const [suggestions, setSuggestions] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [stockPrice, setStockPrice] = useState(null)

    async function handleStockInput(identifier, value) {
        setStockInput((prevValues) => ({
            ...prevValues, [identifier]: value
        }));
        setErrorMessage(null)
        if (identifier === 'symbol') {
            const list = (action === "buy") ? stocksList : portfolioStocksList;
            const filteredSuggestions = list.filter(symbol =>
                symbol.startsWith(value.toUpperCase())
            );
            setSuggestions(filteredSuggestions);
            const priceData = await fetchStockDate(stockInput.symbol);
            console.log(priceData); // Log the fetched data
            if (priceData && priceData.length > 0 && priceData[0].price !== undefined) {
                setStockPrice(priceData[0].price);
            } else {
                setStockPrice(null);
            }
        } else {
            setSuggestions([]); // Clear suggestions if not searching for symbol
        }

    }

    async function handleClickBuy(action) {
        let status = '';
        if (action === "buy") {
            status = await toBuy(stockInput.symbol, stockInput.shares)
        } else {
            status = await toSell(stockInput.symbol, stockInput.shares)
        }
        handleStockInput("symbol", '')
        handleStockInput("shares", '')
        if (status === 200) {
            setErrorMessage(null)
            handleExit(null)
        } else {
            setErrorMessage(status)
        }

        console.log(errorMessage)
    }

    function selectSymbol(symbol) {
        handleStockInput('symbol', symbol);
        setSuggestions([]); // Clear suggestions after selection
    }

    console.log(stockInput)
    return (
        <div className="dash-board-buy-sell-window" onClick={() => handleExit(null)}>
            {/*{errorMessage && <p className="error-message-buy"> there is an error</p>}*/}
            <div className="dash-board-buy-sell-window-2" onClick={(e) => e.stopPropagation()}>
                <h2 className="dash-board-buy-sell-window-title">{action}</h2>
                <label>Enter Stock Symbol</label>
                {stockPrice && <p className="dash-board-buy-sell-window-2-stock-price">Price per stock {stockPrice}</p>}
                <input className="dash-board-buy-sell-input-symbol" type="text"
                       onChange={(event) => handleStockInput(
                           'symbol', (event.target.value).toUpperCase()
                       )} value={stockInput.symbol}/>
                {suggestions.length > 0 && (
                    <div className="suggestions-dropdown">
                        <div className="suggestions-dropdown-contact">
                            <ul>
                                {suggestions.map((symbol) => (
                                    <li
                                        key={symbol}
                                        className="suggestion-item"
                                        onClick={() => selectSymbol(symbol)}
                                    >
                                        {symbol}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                {action === "buy" ?
                    <div className="dash-board-buy">
                        <div className="dash-board-buy-sell-shares-div">
                            <label>Enter Number Of Stocks</label>
                            <input className="dash-board-buy-sell-input-shares" type="number"
                                   onChange={(event) => handleStockInput(
                                       'shares', event.target.value
                                   )}
                                   value={stockInput.shares}/>
                            {(stockPrice && stockInput.shares) &&
                                <p className="dash-board-buy-sell-window-2-stock-price">Total
                                    {" " + (stockPrice * stockInput.shares).toFixed(2)}</p>}
                        </div>
                        {errorMessage &&
                            <p className="error-message-buy">{errorMessage === 406 ? "Insufficient balance to buy the requested number of shares" : "Somethings went wrong pls try again"}</p>}
                        <button className="dash-board-buy-sell-action-button"
                                onClick={() => handleClickBuy("buy", stockInput.symbol, stockInput.shares)}>Buy
                        </button>
                    </div>
                    :
                    <div className="dash-board-buy">

                        <div className="dash-board-buy-sell-shares-div">
                            <label>Enter Number Of Stocks</label>
                            <input className="dash-board-buy-sell-input-shares" type="number"
                                   onChange={(event) => handleStockInput(
                                       'shares', event.target.value
                                   )}/>
                            {(stockPrice && stockInput.shares) &&
                                <p className="dash-board-buy-sell-window-2-stock-price">Total sell
                                    {" " + (stockPrice * stockInput.shares).toFixed(2)}</p>}
                        </div>
                        {errorMessage && <p className="error-message-buy">
                            {errorMessage === 404
                                ? "Stock not found in portfolio"
                                : errorMessage === 406
                                    ? "Insufficient shares to sell"
                                    : "An error occurred while processing your request"}
                        </p>}
                        <button className="dash-board-buy-sell-action-button"
                                onClick={() => handleClickBuy("sell", stockInput.symbol, stockInput.shares)}>Sell
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}