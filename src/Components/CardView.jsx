import React from 'react';
import Card from './Card.jsx';
import './styles.css'

const CardView = ({ hall }) => {
    const arr = hall.map(h => (
        <Card
            id={h.id}
            name={h.name}
            place={h.place}
            capacity={h.capacity}
            available={h.available} />
    ));

    return (
        <div>
            {arr}
        </div>
    );
};

export default CardView;