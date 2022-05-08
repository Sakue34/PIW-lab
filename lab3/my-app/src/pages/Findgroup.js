import React, { useState } from 'react';
import './Findgroup.css';

const getFilteredItems = (query, items) => {
    if(!query) {
        return items;
    }
    return items.filter((group) => { return group.description.includes(query) || group.tags.includes(query) || group.courses.includes(query) });
}

class Findgroup extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            query: ""
        }
    }

    
    updateQuery = (event) => {
        this.setState({
            query: event.target.value
        });
    }

    render() {
        const filteredGroups = getFilteredItems(this.state.query, this.props.groups);

        return (
        <div className='Findgroup'>
            <p>Wyszukaj grupę po opisie, tagach lub kursach</p>
            <input value={this.state.query} onChange={this.updateQuery}/>
            {filteredGroups.map(group => (
                <div key={group.name} className='item'>
                    <h3>{group.name}</h3>
                    <p>{group.description}</p>
                    <p>{group.tags}</p>
                    <p>{group.courses}</p>
                </div>
            ))}
        </div>
        );
    }
}

export default Findgroup;