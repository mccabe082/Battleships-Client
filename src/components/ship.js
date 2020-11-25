import React from "react";

export function Ship(props) {

    const symbol = props.symbol;

    return (
        <div className="ship">
            <p>{symbol}</p>
        </div>
    );
}