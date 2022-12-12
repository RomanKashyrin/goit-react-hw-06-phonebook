import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';
import css from './App.module.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [contacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getContacts = () => {
    const isAddedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(isAddedFilter)
    );
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.contact_title}>Contacts</h2>

      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList contacts={getContacts()} />
        </>
      ) : (
        <Notification message="Contact list is empty" />
      )}
    </div>
  );
};

export default App;
