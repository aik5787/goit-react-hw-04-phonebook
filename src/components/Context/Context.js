import React, { useContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const ContactsContext = React.createContext();

export const useContactsContext = () => {
  return useContext(ContactsContext);
};

export function Context({ children }) {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts
      ? JSON.parse(storedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  const [filter, setFilter] = useState('');

  const [name, setName] = useState('');

  const [number, setNumber] = useState('');

  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   if (storedContacts) {
  //     setContacts(JSON.parse(storedContacts));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const newContact = { id: nanoid(), name, number };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') return;

    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts([...contacts, newContact]);
    setName('');
    setNumber('');
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactsContext.Provider
      value={{
        contacts: contacts,
        filter: filter,
        name: name,
        number: number,
        handleNameChange: handleNameChange,
        handleNumberChange: handleNumberChange,
        handleSubmit: handleSubmit,
        deleteContact: deleteContact,
        handleFilterChange: handleFilterChange,
        getFilteredContacts: getFilteredContacts,
        filteredContacts: filteredContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}
