import React from 'react';
import shortid from 'shortid';
import s from './phone.module.css';
import * as phonebookActions from "../Redux/phonebook/phonebook-actions";
import * as phonebookSelectors from "../Redux/phonebook/phonebook-selectors";

import { useSelector, useDispatch } from "react-redux";

export default function SearchContact() {
  const state = useSelector(phonebookSelectors.getContactFilter);
  const dispatch = useDispatch();

  const searchContact = (e) => {
    dispatch(phonebookActions.veluesFilter(e.target.value));
  };

  const id = shortid.generate();

  return (
    <div className={s.containerSearch}>
      <label className={s.labelSearch}  htmlFor={id}>
        Поиск контактов по имени
      </label>
      <input
        type="tex"
        name="filter"
        value={state}
        onChange={searchContact}
        id={id}
        className={s.inputSearch}
      ></input>
    </div>
  );
}




