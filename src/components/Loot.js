import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends Component {
    state = {
        balance: 0
    }

    componentDidMount() {
        if (this.props.fetchBitcoin) {
            this.props.fetchBitcoin()
        }
    }

    computedBitcoin = () => {
        const { bitcoin } = this.props;

        if (!bitcoin || Object.keys(bitcoin).length === 0) return '';

        return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
    }
    render() {
        return (<div>
            <h3 className="balance">Bitcoin balance: {this.computedBitcoin()}</h3>
        </div>)
    }
}

export default connect(state => ({ state: state }), { fetchBitcoin })(Loot);