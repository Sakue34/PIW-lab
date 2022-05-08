import React from 'react'
import './Home.css';
import { useState } from 'react';

const getFilteredItems = (query, items) => {
    if(!query) {
        return items;
    }
    return items.filter((person) => { return person.description.includes(query) || person.tags.includes(query) || person.courses.includes(query) });
}

const Home = (props) => {
    const {people} = props;

    const [query, setQuery] = useState('');
    const filteredPeople = getFilteredItems(query, people);

    return (
        <div className='Home'>
            <p>
                Wyszukaj studentów po opisie, tagach lub kursach
            </p>
            <input type='text' onChange={(e) => setQuery(e.target.value)}></input>

            {filteredPeople.map(person => (
                <div key={person.name} className='item'>
                    <h3>{person.name}</h3>
                    <p>{person.description}</p>
                    <p>{person.tags}</p>
                    <p>{person.courses}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;