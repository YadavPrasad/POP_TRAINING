import React from 'react';

function Home(properties) {
    var styling = {
        textAlign : "center",
        backgroundColor : "blue",
        color : "red"
    }

    return (
        <div>
            <h1 style = {styling}>Welcome to Home</h1>
            <h2>Below tag is for props</h2>
            <h3>Props : {properties.sjit}</h3>
        </div>
    );
}

export default Home;