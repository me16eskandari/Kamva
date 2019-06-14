import "./App.scss";

import React, { Component } from "react";

import { AddressInfo, BingMap } from "../../components";
import { GeoInfo } from "../../models";
import { GeoLocationApi } from "../../services";

export class App extends Component<any, GeoInfo> {

  constructor(props: any) {
    super(props);
    this.state = {
      lat: undefined,
      lng: undefined,
      userLat: undefined,
      userLng: undefined,
      address: [],
    }
  }

  componentDidMount() {
    GeoLocationApi.getCurrentLocation(
      (res: Position) => {
        this.setState({
          lat: res.coords.latitude, lng: res.coords.longitude,
          userLat: res.coords.latitude, userLng: res.coords.longitude
        });
      },
      () => this.setState({ lat: 0, lng: 0, userLat: 0, userLng: 0 }));
  }

  onAddressChange = (address: string[], lat: number, lng: number) => {
    this.setState({ address: address, lat: lat, lng: lng, userLat: lat, userLng: lat })
  }

  clearData = () => {
    this.setState({ address: [], userLat: undefined, userLng: undefined });
  }

  render() {
    return (
      <div className="app">
        <div className="map">
          {
            this.state.lat !== undefined && this.state.lng !== undefined &&
            <BingMap
              lat={this.state.lat} lng={this.state.lng}
              onAddressChange={this.onAddressChange}
              clearData={this.clearData} />
          }
        </div>
        <AddressInfo address={this.state.address} />
      </div>
    );
  }
}

