import React from 'react';
import SideList from './SideList.jsx';

const List = () => {

    var list = require('./Database.json');
    const array_of_halls = list.response.halls;

    return (
        <div>
            {
                array_of_halls.map(h => (
                    <SideList
                        id={h.id}
                        name={h.name}
                        place={h.place} />
                ))
            }
        </div>
    );
};

export default List;