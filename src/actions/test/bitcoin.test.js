//https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import { FETCH_BITCOIN } from '../../constants';
import { fetchBitcoin } from '../bitcoin';

const createMockStore = configureMockStore([thunk])
const store = createMockStore({ bitcoin: {} });
const mockRepsonse = { body: { bpi: "bitcoin price index" } }

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockRepsonse)

it("Creates an async action to fetch the bitcoin value", () => {
    const expectedActions = [{ bitcoin: mockRepsonse.body, type: FETCH_BITCOIN }]

    return store.dispatch(fetchBitcoin()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
    })
})