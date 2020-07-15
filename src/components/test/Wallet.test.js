import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { Wallet } from "../Wallet";

configure({ adapter: new Adapter() });

describe("Wallet", () => {
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();
    const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw }
    const wallet = shallow(<Wallet {...props} />);

    it("Renders properly", () => {
        expect(wallet).toMatchSnapshot();
    });

    it("Displays the balance from props", () => {
        expect(wallet.find(".balance").text()).toEqual(`Wallet balance: ${props.balance}`)
    });

    it("Creates an input to deposit or withdraw from the balance", () => {
        expect(wallet.find(".input-wallet").exists()).toBe(true)
    });

    describe("When the user types into the wallet input", () => {
        const userBalance = '25';

        beforeEach(() => {
            wallet.find('.input-wallet').simulate('change', { target: { value: userBalance } });
        });

        it('Updates the local wallet balance in `state` and convert it to a number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });

        describe("And the user wants to make a deposit", () => {
            beforeEach(() => {
                wallet.find('.btn-deposit').simulate('click');
            })

            it("Dispatches the `deposit()` it recieves from props with local balance", () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            })
        })

        describe("And the user wants to make a withdrawal", () => {
            beforeEach(() => {
                wallet.find('.btn-withdraw').simulate('click');
            })

            it("Dispatches the `withdraw()` it recieves from props with local balance", () => {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
            })
        })
    })
})