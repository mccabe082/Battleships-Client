import React, { useState } from "react";

export function Label(props) {


    return (
        <div className={`${props.horizontal ? "horizontal-label" : "vertical-label"}`}>
            {props.text}
        </div>
    );
}