import {useEffect} from "react";
import { useDispatch } from "react-redux";

import Form from './components/Form';
import SearchContact from './components/SearchContact';
import ContactList from './components/ContacttList';
import s from './components/phone.module.css';
import * as phonebookOperations from "./Redux/phonebook/phonebook-operations";

export default function Mobile() {
const dispatch = useDispatch();

useEffect(() => {
dispatch(phonebookOperations.fetchContact());
},[dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.headingForm}>Phoneboock</h1>
      <Form />
      <h2 className={s.contactList}>Телефонна книга</h2>
      <SearchContact />
      <ContactList />
    </div>
  );
}
