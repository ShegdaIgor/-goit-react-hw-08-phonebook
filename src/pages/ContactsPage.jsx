import React from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './FilterContact/FilterContact';
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
