import React from "react";

export function Ship(props) {

    const symbol = props.symbol;

    return (
        <div>
            <p className="ship">{symbol}</p>
        </div>
    );
}