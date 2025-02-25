import React from 'react';

function HomePage() {
    var styling = {
        textAlign : "center",
        backgroundColor : "blue",
        color : "red"
    }

    return (
        <div>
            <h1 style = {styling}>Welcome to Home</h1>
            <h2>Below tag is for props</h2>
            <h3>Props </h3>
        </div>
    );
}

export default HomePage;