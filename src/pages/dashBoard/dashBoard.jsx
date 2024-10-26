import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./dashBoard.css"
import DashBoardAttribute from "../../components/dashBoardAttribute /dashBoardAttribute";
import DashBoardStocksTable from "../../components/dashBoardStocksTable/dashBoardStocksTable";
import {BuyAndSell} from "../../components/buyAndSell/buyAndSell";


const Dashboard = ({handleUser}) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        "balance": -1,
        "stocks": {}
    });
    const [buyOrSell, setBuyOrSell] = useState(null);

    const fetchUserData = async () => {
        console.log("try to fetch")
        setUserData({
            "balance": -1,
            "stocks": {}
        })
        try {
            const response = await fetch("http://127.0.0.1:5000/user/data", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUserData(data);
                // localStorage.setItem("userData", JSON.stringify(data));
            } else {
                console.log("Failed to fetch user data");
                handleUser('');
                navigate('/loginAndRegister')
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        fetchUserData();
    }, [navigate]);


    async function buy(symbol, shares) {
        try {
            const response = await fetch("http://127.0.0.1:5000/user/buy-stock", {
                method: 'POST',
                body: JSON.stringify({
                    "symbol": symbol,
                    "shares": shares
                }),
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUserData(data)
                fetchUserData()
                // localStorage.setItem("userData", JSON.stringify(data)); // Update localStorage

            } else {
                console.log(response.status)
            }
            return response.status;
        } catch (error) {
            console.error("Error fetching user data:", error);
        }

    }

    async function sell(symbol, shares) {
        try {
            const response = await fetch("http://127.0.0.1:5000/user/sell-stock", {
                method: 'POST',
                body: JSON.stringify({
                    "symbol": symbol,
                    "shares": shares
                }),
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUserData(data)
                fetchUserData()
                // localStorage.setItem("userData", JSON.stringify(data)); // Update localStorage

            } else {
                console.log(response.status)
            }
            return response.status;
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    function handleBuy(action) {
        setBuyOrSell(action);
    }

    let pAndL = 0;
    let previousPortfolioValue = 0;
    let currentPortfolioValue = 0;
    let stocksValue = 0;
    let portfolioStocksList = [];
    if (userData && userData.stocks && Object.keys(userData.stocks).length > 0) {
        Object.entries(userData.stocks).forEach(([symbol, stockData]) => {
            pAndL += stockData.current_price - stockData.previous_price;
            previousPortfolioValue += stockData.previous_price;
            currentPortfolioValue += stockData.current_price;
            stocksValue += stockData.current_price * stockData.shares
            portfolioStocksList.push(symbol);
        });
    }

    console.log(userData)
    return (
        <div className="dash-board">

            <h1 className="dash-board-main-title"> Dashboard </h1>
            <div className="dash-board-attributes">
                <div className="dash-board-balance-cash" style={{zIndex: buyOrSell === "buy" ? '100' : '0'}}>
                    <DashBoardAttribute userData={userData} title="Cash Balance"
                                        value={Math.floor(userData.balance) + "$"}/>
                </div>
                <div className="dash-board-pl">
                    <DashBoardAttribute title="P&L Daily" userData={userData} value={
                        (100 * (currentPortfolioValue - previousPortfolioValue) / previousPortfolioValue).toFixed(2)
                        + "%"} value2={pAndL.toFixed(2)}/>
                </div>
                <div className="dash-board-stocks-value">
                    <DashBoardAttribute title="Portfilo Value" userData={userData}
                                        value={stocksValue.toFixed(0) + "$"}/>
                </div>
                <div className="dash-board-portfolio-performance">
                    <DashBoardAttribute userData={userData} title="Portfolio Performance"
                                        value={Math.floor(userData.balance + stocksValue - 10000) + "$"}/>
                </div>
                <div className="dash-board-total-balance">
                    <DashBoardAttribute userData={userData} title="Total Balance"
                                        value={(userData.balance + stocksValue).toFixed(0) + "$"}/>
                </div>
            </div>
            <div className="dash-board-table-and-sell">

                <div className="dash-board-stocks-table">
                    <DashBoardStocksTable userData={userData}/>
                </div>
                <div className="dash-board-buy-sell">
                    <button className="dash-board-buy-button" onClick={() => handleBuy("buy")}>Buy</button>
                    <button className="dash-board-sell-button" onClick={() => handleBuy("sell")}>Sell</button>
                </div>


            </div>
            {buyOrSell &&
                <BuyAndSell portfolioStocksList={portfolioStocksList} toSell={sell}
                            toBuy={buy} action={buyOrSell}
                            handleExit={handleBuy}/>}

        </div>
    );
};

export default Dashboard;
