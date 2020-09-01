import React from 'react';

const validationText = props => {

    let validation = null;
    
    if (props.length < 10) {
        validation = <h4>Texto demasiado corto</h4>
    } else {
        validation = <h4>Texto demasiado Largo</h4>
    }

    return (
        <div>
            {validation}
        </div>
    )
}

export default validationText;