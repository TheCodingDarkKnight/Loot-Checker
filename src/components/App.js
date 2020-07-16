import React, { Component } from "react";

import Wallet from "./Wallet";
import Loot from "./Loot";

const App = () => {
    return (
        <div>
            <h2>Loot check</h2>
            <hr />
            <Wallet />
            <Loot />
            <div>Powered by <a href="https://www.coindesk.com/price" target="_blank" without rel="noopener noreferrer">Coindesk</a></div>
        </div>
    )
}

export default App;