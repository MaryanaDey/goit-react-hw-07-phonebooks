import React from "react";
import { useSelector} from "react-redux";
import Button from "./ButtonList/buttonList";
import * as phonebookSelectors from "../Redux/phonebook/phonebook-selectors";
import s from "./phone.module.css"

export default function СontactList() {
  const stateContacts = useSelector(state => phonebookSelectors.getFilterContacts(state));

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
                    <a href={`tel: ${number}`} className={s.numberContact}>
                      {number}
                    </a>
                  </span>
                  <Button id={id}>Видалити</Button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}