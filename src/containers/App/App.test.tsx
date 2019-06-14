import { mount } from "enzyme";
import React from "react";

import { AddressInfo, BingMap } from "../../components";
import { App } from "./App";

interface Global {
  navigator: any;
}

declare var global: Global;

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};


// mock getCurrentLocation because it cannot be used in test
global.navigator.geolocation = mockGeolocation;

describe('Test App Component with Enzym', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ lat: 37.09024, lng: -95.7128 });
    expect(wrapper.find(BingMap)).toHaveLength(1);
    expect(wrapper.find(AddressInfo)).toHaveLength(1);
  });
});