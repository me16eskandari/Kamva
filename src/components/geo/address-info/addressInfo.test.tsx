import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";

import { AddressInfo } from "./addressInfo";

describe('Addres Info component renders a list of address parts', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<AddressInfo address={[]} />);

        const address = [
            "Name: Tehran",
            "Country: Iran",
        ];
        wrapper.setProps({ address: address });
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find("span")).toHaveLength(2);
    });
});