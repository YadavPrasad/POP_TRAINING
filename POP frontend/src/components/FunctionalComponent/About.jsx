import React from 'react';
import { useState } from 'react';

function About() {
    var intialVal = 0;
    var[num, setNum] = useState(intialVal);
    function handleDecrement() {
        setNum(num-1)
    }
    function handleIncrement() {
        setNum(num+1)
    }
    return (
        <div>
            <h1>About Page</h1>
            <h2>State initial valus is {intialVal}</h2>
            <button onClick = {handleDecrement}>-</button>
            <h3>Updating state:{num}</h3>
            <button onMouseOver={handleIncrement}>+</button>
            <button onClick={() => {setNum(0)}}>Reset</button>
        </div>
    );
}

export default About;