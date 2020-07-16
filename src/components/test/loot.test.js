import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure, shallow } from 'enzyme';

import { Loot } from "../Loot";

configure({ adapter: new Adapter() });

describe("Loot", () => {
    const mockFetchBitcoin = jest.fn();
    let props = { balance: 20, bitcoin: {} }
    let loot = shallow(<Loot {...props} />);

    it("Renders properly", () => {
        expect(loot).toMatchSnapshot();
    });

    describe('when mounted', () => {
        beforeEach(() => {
            props.fetchBitcoin = mockFetchBitcoin;
            loot = mount(<Loot {...props} />);
        });

        it("Dispatches the `fetchBitcoin()` it recieves from props", () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        })
    })

    describe('When there are valid bitcoin props', () => {
        beforeEach(() => {
            props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1,000' } } } }
            loot = shallow(<Loot {...props} />);
        })

        it("Displays correct bitcoin value", () => {
            expect(loot.find("h3").text()).toEqual("Bitcoin balance: 0.01");
        })
    })
})

