import React from 'react';
import './styles.css';

const SideList = (props) => {
        
    return (
        <li key={props.id} className="list-element">
                <span>{props.name}, {props.place}</span>
        </li>
    );
};

export default SideList;