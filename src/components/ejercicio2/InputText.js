import React from 'react';
import ValidationText from './ValidationText';


const inputText = props => {
   
    return (
        <div>
            <textarea onChange={props.change} value={props.text}></textarea>
            <h4>{props.textLength}</h4>
            <ValidationText length={props.textLength} />

        </div>
    )
}

export default inputText;