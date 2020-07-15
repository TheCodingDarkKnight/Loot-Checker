import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { Wallet } from "../Wallet";

configure({ adapter: new Adapter() });

describe("Wallet", () => {
    const props = { balance: 20 }
    const wallet = shallow(<Wallet {...props} />);

    it("Renders properly", () => {
        expect(wallet).toMatchSnapshot();
    });

    it("Displays the balance from props", () => {
        expect(wallet.find(".balance").text()).toEqual(`Wallet balance: ${props.balance}`)
    })
})