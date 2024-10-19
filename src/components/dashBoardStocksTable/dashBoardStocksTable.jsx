import './dashBoardStocksTable.css'

export default function DashBoardStocksTable({userData}) {

    return (
        <div className="dash-board-stocks-table-main-div">
            {userData && userData.stocks && Object.keys(userData.stocks).length > 0 ? (
                <table className="dash-board-stocks-table-tb">
                    <thead>
                    <tr className="dash-board-stocks-table-tb-first-row">
                        <th>Stock</th>
                        <th>Shares</th>
                        <th>Buy Price</th>
                        <th>Current Price</th>
                        <th>Profit</th>
                        <th>Profit %</th>
                        <th>P&L</th>
                        {/* Add more headers as needed */}
                    </tr>
                    </thead>
                    <tbody className="dash-board-stocks-table-tb-body">
                    {Object.entries(userData.stocks).map(([symbol, stockData]) => (
                        <tr key={symbol}>
                            <td>{symbol}</td>
                            <td>{stockData.shares}</td>
                            <td>{stockData.buy_price}</td>
                            <td>{stockData.current_price}</td>
                            <td style={{color: stockData.profit_number >= 0 ? "#28a745" : '#dc3545'}}>{stockData.profit_number}</td>
                            <td style={{color: stockData.profit_number >= 0 ? "#28a745" : '#dc3545'}}>{stockData.profit_percentage}</td>
                            <td style={{color: stockData.current_price - stockData.previous_price >= 0 ? "#28a745" : '#dc3545'}}>{
                                (stockData.current_price - stockData.previous_price).toFixed(2)}</td>
                            {/* Add more stock details as needed */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : userData && userData.stocks && Object.keys(userData.stocks).length === 0 ? (
                <div className="dash-board-stocks-table-tb-empty">
                    <h2>Welcome To Your Personal Portfolio!</h2>
                    <p>Buy stocks to start the simulation and watch your investments grow.</p>
                    <p className="instructions">Get started by exploring our stock market and making your first
                        purchase!</p>
                </div>
            ) : (
                <div className="dash-board-stocks-table-tb-loading">

                </div>
            )}
        </div>
    )
}