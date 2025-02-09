const API_KEY = "LFLW8PXLZXR2023S"; 
const symbols = ["AAPL", "GOOGL", "MSFT", "TSLA", "AMZN"]; 

let lastFetchTime = 0;  
let stockData = {}; 

const defaultData = {
    AAPL: { price: 227.63, color: "white", arrow: "" },
    GOOGL: { price: 185.34, color: "red", arrow: "↓" },
    MSFT: { price: 409.75, color: "white", arrow: "" },
    TSLA: { price: 361.62, color: "green", arrow: "↑" },
    AMZN: { price: 229.15, color: "red", arrow: "↓" }
};

async function fetchStockData() {
    const currentTime = Date.now();

    if (currentTime - lastFetchTime > 3600000) {
        try {
            let tickerContent = '';
            for (let i = 0; i < symbols.length; i++) {
                const symbol = symbols[i];
                const response = await fetch(
                    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
                );
                const data = await response.json();
                const stockInfo = data["Global Quote"];

                if (stockInfo) {
                    const price = parseFloat(stockInfo["05. price"]);
                    const changeValue = parseFloat(stockInfo["09. change"]);

                    let color = "white"; 
                    let arrow = ""; 

                    if (changeValue > 0) {
                        color = "green"; 
                        arrow = "↑"; 
                    } else if (changeValue < 0) {
                        color = "red"; 
                        arrow = "↓"; 
                    }

                    
                    stockData[symbol] = { price, changeValue, color, arrow };

                    tickerContent += ` 
                        <span style="color: ${color};">${symbol}: $${price}</span> 
                        <span>${arrow}</span> | 
                    `;
                } else {
                    
                    tickerContent += ` 
                        <span style="color: ${defaultData[symbol].color};">${symbol}: $${defaultData[symbol].price}</span> 
                        <span>${defaultData[symbol].arrow}</span> | 
                    `;
                }
            }

           
            tickerContent += tickerContent;
            tickerContent += tickerContent;

            document.getElementById("stock-ticker").innerHTML = tickerContent;
            lastFetchTime = currentTime;

        } catch (error) {
            console.error("Greška pri dohvatanju podataka:", error);
            let tickerContent = '';
            for (let i = 0; i < symbols.length; i++) {
                const symbol = symbols[i];
                tickerContent += `
                    <span style="color: ${defaultData[symbol].color};">${symbol}: $${defaultData[symbol].price}</span>
                    <span>${defaultData[symbol].arrow}</span> | 
                `;
            }
            document.getElementById("stock-ticker").innerHTML = tickerContent;
        }
    } else {
        
        let tickerContent = '';
        for (let i = 0; i < symbols.length; i++) {
            const symbol = symbols[i];
            const data = stockData[symbol] || defaultData[symbol]; 

            tickerContent += `
                <span style="color: ${data.color};">${symbol}: $${data.price}</span>
                <span>${data.arrow}</span> | 
            `;
        }
        document.getElementById("stock-ticker").innerHTML = tickerContent;
    }
}

fetchStockData(); 


setInterval(fetchStockData, 86400000);
