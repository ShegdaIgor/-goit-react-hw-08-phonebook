// import { ContactsForm } from './ContactsForm/ContactsForm';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './FilterContact/FilterContact';
// import css from './App.module.css';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
// import ContactsPage from 'pages/ContactsPage';

export const App = () => {
  return (
    <Layout>
      <Routes>
        {/* <div className={css.contacts}>
          <h1>Phonebook</h1>
          <ContactsForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </div> */}
        <Route path="/" element={<Layout />}></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/contacts" element={<ContactsPage />} /> */}
        <Route />
        <Route />
      </Routes>
    </Layout>
  );
};
