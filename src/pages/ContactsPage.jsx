import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/FilterContact/FilterContact';
import React from 'react';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={css.contacts}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
