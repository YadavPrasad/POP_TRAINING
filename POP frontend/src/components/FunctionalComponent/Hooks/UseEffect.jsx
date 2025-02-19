import React, { useState } from "react";

const UseEffect = () => {
    const [text, setText] = useState("");

    const handleInputChange = (event) => {
        setText(event.target.value);  // Update the 'text' state with input value
    };

    return (
        <section>
            <h1>This is h1 tag</h1>
            Type your text : <input type="text" onChange={handleInputChange} />
            <h2>The text typed is {text}</h2>
        </section>
    );
};

export default UseEffect;
