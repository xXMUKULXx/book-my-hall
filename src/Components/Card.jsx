import React from 'react';
import './styles.css';

const Card = ({ id, name, place, capacity, available }) => {
    return (
        <div className="card-view">
            <img className="card-image" src={`https://picsum.photos/500/300`} alt={`random pic`} />
            <div className="card-content">
                <h2>{name}, {place}</h2>
                <span>Capacity: {capacity}</span>
                <div className="button-div">
                    {available ? (<button>book</button>) : (<button>cancel</button>)}
                </div>
            </div>
        </div>
    );
};

export default Card;