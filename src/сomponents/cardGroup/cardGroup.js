import React from 'react';
import ReactDOM from 'react-dom';
import Card from './../card/card';

function CardGroup () {
    return(
        <div className="card-deck">
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardGroup; 