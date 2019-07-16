import React from 'react';
import SideList from './SideList.jsx';

const List = () => {

    var list = require('./Database.json');
    const array_of_halls = list.response.halls;

    return (
        <div>
            <ul>
                {
                    array_of_halls.map(h =>
                        <div>
                            <SideList
                                id={h.id}
                                name={h.name}
                                place={h.place} />
                            <span>{h.id} {h.name} {h.place}</span>
                        </div>
                    )
                }
            </ul>
        </div>
    );
};

export default List;