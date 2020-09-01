import React from 'react';

const userInput = props => {
    const style = {
        backgroundColor: 'skyblue',
        fontFamily: 'sans-serif',
        textAling: 'center',
        border: '1px solid green',
        boxShadow: '0 2px 2px black',
        padding: '10px',
        margin: '10px'
      }
    return (
        <div>
            <input style={style} type='text' onChange={props.change} value={props.name}/>
        </div>
    )
}

export default userInput;