const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const buy = (state, obj) => {
    const price = state.prices.find((element) => {
        return element.name === obj.name;
    }).price;

    if (price * obj.quantity > state.funds) {
        return alert('Insufficient funds.');
    }
    state.funds -= (price * obj.quantity);

    const index = state.boughtStocks.findIndex((stock) => {
        return stock.name === obj.name;
    });

    if (index > -1) {
        state.boughtStocks[index].quantity += obj.quantity;
        return;
    }

    state.boughtStocks.push({
        name: obj.name,
        quantity: obj.quantity,
    });
}

const sell = (state, obj) => {
    const price = state.prices.find((element) => {
        return element.name === obj.name;
    }).price;

    const index = state.boughtStocks.findIndex((stock) => {
        return stock.name === obj.name;
    });

    if (obj.quantity > state.boughtStocks[index].quantity) {
        return alert('You can not sell more than you have.');
    }

    state.funds += (price * obj.quantity);

    state.boughtStocks[index].quantity -= obj.quantity;

    if (state.boughtStocks[index].quantity === 0) {
        state.boughtStocks.splice(index, 1);
    }
}

const endDay = (state) => {
    state.prices = state.prices.map((element) => {
        let newPrice = getRandomNumber((element.price - 0.05) * 1000, (element.price + 0.05) * 1000) / 1000;
        newPrice = Math.max(newPrice, 0.05);
        return {
            name: element.name,
            price: newPrice,
        }
    });
}

const save = (state) => {
    localStorage.setItem('funds', JSON.stringify(state.funds));
    localStorage.setItem('prices', JSON.stringify(state.prices));
    localStorage.setItem('boughtStocks', JSON.stringify(state.boughtStocks));
}

const load = (state) => {
    if (localStorage.length === 0) {
        return alert('You have no data saved.');
    }
    state.funds = JSON.parse(localStorage.getItem('funds'));
    state.prices = JSON.parse(localStorage.getItem('prices'));
    state.boughtStocks = JSON.parse(localStorage.getItem('boughtStocks'));
}

export default {
    buy,
    sell,
    endDay,
    save,
    load
}
