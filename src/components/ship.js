import React from "react";

export function Ship(props) {

    const symbol = props.symbol;

    return (
        <p className="ship">{symbol}</p>
    );
}