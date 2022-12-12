import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState();
  const deleteContact = e => {
    setContacts(prevState => prevState.filter(contact => contact.id !== e));
  };

  return (
    <div className={css.list_box}>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <p className={css.contact_name}>
              {name} ------------ {number}
            </p>

            <button
              className={css.btn_delete_contact}
              type="submit"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.protoType = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),

  onDeleteContact: PropTypes.func,
};

export default ContactList;
