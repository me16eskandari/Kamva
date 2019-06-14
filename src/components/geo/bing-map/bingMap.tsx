import "./bingMap.scss";

import React from "react";

import { BingMapProps } from "../../../models";
import { BingMapLoader } from "../../../services";

export class BingMap extends React.Component<BingMapProps, any> {

    componentDidMount() {
        BingMapLoader.loadBingMap(this.props.lat, this.props.lng, this.refs.map as HTMLElement, this.setLocation);
    }

    setLocation = (lat: number, lng: number) => {
        BingMapLoader.setPin(lat, lng);
        BingMapLoader.reverseGeocode(lat, lng, this.setAddressInfo);
    }

    setAddressInfo = (address: string[], lat: number, lng: number) => {
        if (this.props.onAddressChange)
            this.props.onAddressChange(address, lat, lng);
    }

    clearData = () => {
        BingMapLoader.removePin();
        if (this.props.clearData)
            this.props.clearData();
    }


    public render() {
        return (
            <div className="map-wrapper">
                <div id="c" ref="map" ></div>
                <a href="#clear" className="clear-button" onClick={this.clearData}>Remove Pin</a>
            </div>
        );
    }
}