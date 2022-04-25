import React, { useState } from 'react';
import './Addstudent.css';

const Addstudent = (props) => {
    const {addPerson} = props;

    const [newPerson, setNewPerson] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewPerson(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addPerson(newPerson);
        alert('Dodawanie zgłoszenia zakończone powodzeniem');
        setNewPerson("");
    }

    return (
        <div className='Addstudent'>
            <p>Dodaj swoje ogłoszenie</p>
            <form className='form__items' onSubmit={handleSubmit}>
                <label>Podaj swoje imię i nazwisko:
                    <input 
                        type="text" 
                        name="name"
                        value={newPerson.name || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Podaj swój adres email (niewidoczny dla innych użytkowników):
                    <input 
                        type="text" 
                        name="email"
                        value={newPerson.email || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Napisz swój opis:
                    <input 
                        type="text" 
                        name="description"
                        value={newPerson.description || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Podaj swoje tagi, czyli języki i technologie w jakich szukasz grupy:
                    <input 
                        type="text" 
                        name="tags"
                        value={newPerson.tags || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Podaj nazwę kursu, do jakiego szukasz grupy:
                    <input 
                        type="text" 
                        name="courses"
                        value={newPerson.courses || ""}
                        onChange={handleChange}
                    />
                </label>
                <label className='submit__label'>
                    <input type="submit" />
                </label> 
            </form>
        </div>
    );
}

export default Addstudent;