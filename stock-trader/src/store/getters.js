const funds = (state) => {
    return state.funds;
}

const stocks = (state) => {
    const stocks = [...state.prices].map((stock) => {
        return {
            name: stock.name,
            price: Math.trunc(stock.price * 1000)
        };
    });
    return stocks;
}

const ownedStocks = (state) => {
    const stocks = [...state.boughtStocks].map((stock) => {
        const price = state.prices.find((element) => {
            return element.name === stock.name;
        }).price;
        stock['price'] = Math.trunc(price * 1000);
        return stock;
    });
    return stocks;
}

export default {
    funds,
    stocks,
    ownedStocks
}