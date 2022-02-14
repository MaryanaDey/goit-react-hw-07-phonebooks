
import Form from './components/Form';
import SearchContact from './components/SearchContact';
import ContactList from './components/ContacttList';
import s from './components/Phone.module.css';

export default function Mobile() {

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
