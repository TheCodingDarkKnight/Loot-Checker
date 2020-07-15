import React, { Component } from "react";
import { connect } from "react-redux";

export class Wallet extends Component {

    render() {
        console.log(this.props)
        return (<h3 className="balance">Wallet balance: {this.props.balance}</h3>)
    }
}

export default connect(state => ({ balance: state.balance }), undefined)(Wallet);