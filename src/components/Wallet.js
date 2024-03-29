import React, { Component } from "react";
import { connect } from "react-redux";

import { deposit, withdraw } from "../actions/balance";

export class Wallet extends Component {
    state = {
        balance: 0
    }
    render() {
        return (<div>
            <h3 className="balance">Wallet balance: {this.props.balance}</h3>
            <br />
            <input className="input-wallet" onChange={e => this.setState({ balance: parseInt(e.target.value, 10) })} />
            <button className="btn-deposit" onClick={() => this.props.deposit(this.state.balance)}>Deposit</button>
            <button className="btn-withdraw" onClick={() => this.props.withdraw(this.state.balance)}>Withdraw</button>
        </div>)
    }
}

export default connect(state => ({ balance: state.balance }), { deposit, withdraw })(Wallet);