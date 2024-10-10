import './buyAndSell.css'
import {useState} from "react";
import '../../assests/stocksList/stocksList'
import stocksList from "../../assests/stocksList/stocksList";
export function BuyAndSell({portfolioStocksList,toSell,toBuy,action,handleExit}){
    const [stockInput,setStockInput] = useState({
        "symbol" :'',
        "shares":''
    });
    const [suggestions, setSuggestions] = useState([]);

    function handleStockInput(identifier,value){
        setStockInput((prevValues)=>({
            ...prevValues,[identifier]:value
        }));
        if (identifier === 'symbol') {
            const list = (action === "buy") ? stocksList : portfolioStocksList;
            const filteredSuggestions = list.filter(symbol =>
                symbol.startsWith(value.toUpperCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]); // Clear suggestions if not searching for symbol
        }

        }
        function handleClickBuy(action,symbol,shares){
        if(action==="buy") {
            toBuy(stockInput.symbol, stockInput.shares)
        }else{
            toSell(stockInput.symbol, stockInput.shares)
        }
            handleStockInput("symbol",'')
            handleStockInput("shares",'')
            handleExit(null)
        }
    function selectSymbol(symbol) {
        handleStockInput('symbol', symbol);
        setSuggestions([]); // Clear suggestions after selection
    }

console.log(stockInput)
    return(
        <div className="dash-board-buy-sell-window" onClick={()=>handleExit(null)}>
            <div className= "dash-board-buy-sell-window-2"  onClick={(e) => e.stopPropagation()}>
            <h2 className="dash-board-buy-sell-window-title">{action}</h2>
            <label>Enter Stock Symbol</label>
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
                               )}/>
                    </div>
                    <button className="dash-board-buy-sell-action-button"
                            onClick={() => handleClickBuy("buy",stockInput.symbol, stockInput.shares)}>Buy
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
                    </div>
                    <button className="dash-board-buy-sell-action-button"
                            onClick={() => handleClickBuy("sell",stockInput.symbol, stockInput.shares)}>Sell
                    </button>
                </div>
            }
            </div>
        </div>
    )
}