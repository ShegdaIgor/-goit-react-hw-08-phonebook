import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/FilterContact/FilterContact';
import React from 'react';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={css.contacts}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactsForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
