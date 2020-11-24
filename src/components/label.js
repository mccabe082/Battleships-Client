import React, { useState } from "react";

export function Label(props) {

    return (
        <div className="label">
            {props.text}
        </div>
    );
}