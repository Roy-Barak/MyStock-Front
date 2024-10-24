async function fetchStockDate(symbol) {
    // Flask API endpoint
    const API_ENDPOINT = `http://127.0.0.1:5000/get/stock/${symbol}`;

    try {
        const fetchResponse = await fetch(API_ENDPOINT);
        const stockData = await fetchResponse.json();

        if (!fetchResponse.ok) {
            throw new Error(stockData.error || 'Failed to fetch stock data');
        }

        return (
            //return array for two users first for stockTab and the second for StockTable
            [
                {
                    price: stockData[0].current_price,
                    prevValue: stockData[0].previous_close,
                    name: stockData[0].name
                },
                {
                    price: stockData[1].bid,
                    prevValue: stockData[0].previous_close,
                    name: stockData[0].name
                }
            ])
            ;
    } catch (error) {
        console.error(`Error fetching ${symbol} updates:`, error);
        return null;
    }
}

export default fetchStockDate