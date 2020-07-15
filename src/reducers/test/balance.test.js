import balanceReducer from "../balance";
import balanceReducer2 from "../balance";
import * as constants from "../../constants";

describe("balanceReducer", () => {

    describe("When initializing", () => {
        const balance = 10;

        it("Sets a balance", () => {
            expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
        });

        describe("Then re-initializing", () => {
            it("reads the balance from cookies", () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            })
        })
    });

    it("Deposits into the balance", () => {
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