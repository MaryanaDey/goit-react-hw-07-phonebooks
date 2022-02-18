import React from 'react';
import s from './Phone.module.css';
import * as phonebookSelectors from "../Redux/phonebook/phonebook-selectors" 

//import {getFilterContacts} from "../Redux/phonebook/phonebook-selectors";
//import { onDeletedContact } from "../Redux/phonebook/phonebook-actions";
import { useSelector} from 'react-redux';
import phonebookOperation from 'Redux/phonebook/phonebook-operation';

export default function  СontactList () {

  const stateContacts = useSelector(phonebookSelectors.getFilterContacts);

  return (
    <>
    {stateContacts.length > 0 && (
      <div>
        <p className={s.infoContact}>
        Для того щоб набрати номер, просто натисніть на нього 😊
        </p>

        <ul className={"js-list"}>
          {stateContacts.map(({ id, newName, number }) => {
            return (
              <li key={id}>
              <span className={s.nameContact}>{newName}: </span>
              <span className={s.numberContact}>
                 +38 
                 <a href={`tel: ${number}`}>
                   {number}
                  </a>
              </span>
              <button className={s.btnList} type="button"
               onClick={() => phonebookOperation.onDeleted(id)}>
                Удалить
              </button>
            </li>
            )
          })}
         </ul>
      </div>
    )}
   </>
  );
}

