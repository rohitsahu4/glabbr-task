import "../css/Switch.css"
import React from 'react';

function Switch({status, onClick}) {
    const on = status ? "on" : "off";
    return (
        <div className={"switch-container " + on} onClick={onClick}>
            <div className="switch-inner">
                &nbsp;
            </div>
            <div className="switch-inner shadow">
                &nbsp;
            </div>
        </div>)
}

export default Switch;