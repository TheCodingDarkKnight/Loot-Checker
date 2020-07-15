import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import App from "../App";

configure({ adapter: new Adapter() });

describe("App", () => {
    const app = shallow(<App />);

    it("Renders properly", () => {
        expect(app).toMatchSnapshot();
    });

    it("Contains a connected Wallet component", () => {
        console.log(app.debug())
        expect(app.find("Connect(Wallet)").exists()).toBe(true);
    })
})