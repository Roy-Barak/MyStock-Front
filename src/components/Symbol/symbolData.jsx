async function fetchStockDate(symbol) {
    // Flask API endpoint
    const API_ENDPOINT = `https://mystock-backend.vercel.app/get/stock/${symbol}`;

    try {
        const fetchResponse = await fetch(API_ENDPOINT);
        const stockData = await fetchResponse.json();

        if (!fetchResponse.ok) {
            throw new Error(stockData.error || 'Failed to fetch stock data');
        }
        const price = stockData[1].bid || stockData[1].previousClose;

        return (
            //return array for two users first for stockTab and the second for StockTable
            [
                {
                    price: stockData[0].current_price,
                    prevValue: stockData[0].previous_close,
                    name: stockData[0].name
                },
                {
                    name: stockData[0].name,
                    price: price,
                    previousClose: stockData[1]?.previousClose,
                    dayLow: stockData[1]?.dayLow,
                    dayHigh: stockData[1]?.dayHigh,
                    fiftyTwoWeekLow: stockData[1]?.fiftyTwoWeekLow,
                    fiftyTwoWeekHigh: stockData[1]?.fiftyTwoWeekHigh,
                    averageVolume: stockData[1]?.averageVolume,
                }
            ])
            ;
    } catch (error) {
        console.error(`Error fetching ${symbol} updates:`, error);
        return null;
    }
}

export default fetchStockDate