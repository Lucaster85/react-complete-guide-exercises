import React from "react";
import './listItem.css';

const listItem = props => {
    
    return (
        <div className="listItem" onClick={props.click}>{props.chart}</div>
    )
}

export default listItem;