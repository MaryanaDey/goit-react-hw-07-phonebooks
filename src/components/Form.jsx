import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as phonebookOperation from "../Redux/phonebook/phonebook-operations";
import * as phonebookSelectors from "../Redux/phonebook/phonebook-selectors";

import shortid from 'shortid';
import s from './phone.module.css';
import Button from "./Button/button";

//import  {getContactList} from "../Redux/phonebook/phonebook-selectors";
//import { addContact } from '../Redux/phonebook/phonebook-actions';


export default function Form() {
  const [newName, setName] = useState("");
  const [number, setNumber] = useState("");

  const state = useSelector(phonebookSelectors.getContactList);
  const dispatch = useDispatch();

  const InputValues = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContact = (e) => {
    e.preventDefault();

    const lengthInputNemeChech = newName.length;
    const lengthInputNumberChech = number.length;
    if (lengthInputNemeChech < 2 || lengthInputNemeChech > 10) {
      alert('Введите имя больше 1-го символа и не больше 10 ');
      return;
    }
    if (lengthInputNumberChech < 7 || lengthInputNumberChech > 10) {
      alert("Введите номер боьше  7-ми цифр и не больше 10");
      return;
    }

    onSubmit(newName, number, state);

    resetInputValues();
  };

  const onCheckName = (contactList, newNameF) => {
    return contactList.some(({ newName }) => newName === newNameF);
  };

  const onSubmit = (newName, number, contactList) => {
    if (onCheckName(contactList, newName)) {
      alert('Это имя вже существует');
      return;
    }
    dispatch(phonebookOperation.addContact(newName, number));
  };

  const resetInputValues = () => {
    setName("");
    setNumber("");
  };

  const idName = shortid.generate();
  const idNumber = shortid.generate();
  
  return (
    <form className={s.form} onSubmit={addContact}>
      <label htmlFor={idName} className={s.labelName}>
        Им'я
      </label>
      <input
        id={idName}
        type="text"
        name="name"
        value={newName}
        onChange={InputValues}
        autoComplete="off"
      ></input>
      <label htmlFor={idNumber} className={s.labelNumber}>
        Номер
      </label>
      <input
        id={idNumber}
        placeholder="(0xx) xxx-xx-xx"
        type="tel"
        pattern="^[ 0-9]+$"
        name="number"
        value={number}
        onChange={InputValues}
        autoComplete="off"
      ></input>

      <Button>Додати контакт</Button>
    </form>
  );
}