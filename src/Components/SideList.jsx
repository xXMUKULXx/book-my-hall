import React from 'react';
import './styles.css';

const SideList = ({ id, name, place}) => {
        
    return (
        <li key={name} className="side-list list-element">
                <span>{name}, {place}</span>
        </li>
    );
};

export default SideList;