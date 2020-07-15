import balanceReducer from "../balance";
import * as constants from "../../constants";

describe("balanceReducer", () => {
    it("Sets a balance", () => {
        const balance = 10;

        expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
    });

    it("Deposit into the balance", () => {
        const initialBalance = 5;
        const deposit = 10;

        expect(balanceReducer(initialBalance, { type: constants.DEPOSIT, deposit })).toEqual(initialBalance + deposit);
    })

    it("Withdraw from the balance", () => {
        const initialBalance = 15;
        const withdrawal = 5;

        expect(balanceReducer(initialBalance, { type: constants.WITHDRAW, withdrawal })).toEqual(initialBalance - withdrawal);
    })
})