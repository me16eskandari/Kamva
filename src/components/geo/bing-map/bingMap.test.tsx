import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { BingMap } from "./bingMap";

describe('Bing Map component renders a map with a marker', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<BingMap lat={37.09} lng={-95.71} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});