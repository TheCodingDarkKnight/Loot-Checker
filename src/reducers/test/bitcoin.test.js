import bitcoinReducer from "../bitcoin"
import { FETCH_BITCOIN } from "../../constants";

describe("bitCoinReducer", () => {
    const bitcoinData = {bpi: 'bitcoin price index'}

    it("fetches and sets the bitcoin data", () => {
        expect(bitcoinReducer({}, {type: FETCH_BITCOIN, bitcoin: bitcoinData})).toEqual(bitcoinData)
    })
})