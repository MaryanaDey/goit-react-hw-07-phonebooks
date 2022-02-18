import s from "./buttonList.module.css";
import * as phonebookOperations from "../../Redux/phonebook/phonebook-operations";
import { useDispatch } from "react-redux";

export default function ButtonList({ children, id }) {
  const dispatch = useDispatch();
  
  return (
    <button
      className={s.btnList}
      onClick={() => dispatch(phonebookOperations.onDeleted(id))}
      type="button">
      <span> {children}</span>
    </button>
  );
}