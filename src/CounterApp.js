import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState( value );

    //const handleSubtract = () => {
        //setCounter(counter - 1);
    //}

    const handleSubtract2 = () => {
        setCounter( (counter) => counter - 1 )
    }

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <div className="section-buttons">
                <button id="subtraction" onClick = { handleSubtract2 }>-1</button>
                <button id="reset" onClick = { handleReset }>Reset</button>
                <button id="sum" onClick = { handleAdd }>+1</button>
            </div>

        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;