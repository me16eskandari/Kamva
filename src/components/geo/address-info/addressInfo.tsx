import "./addressInfo.scss";

import React, { SFC } from "react";

import { AddressInfoProps } from "../../../models";

export const AddressInfo: SFC<AddressInfoProps> = (props) => {
    return (
        <div className="address-info">
            {
                props.address && props.address.map((x, index: number) => <span key={index}>{x}</span>)
            }
        </div>
    );
}