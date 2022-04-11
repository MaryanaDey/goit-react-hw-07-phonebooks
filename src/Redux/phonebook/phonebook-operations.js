import axios from "axios";
import  * as actions from "./phonebook-actions";

axios.defaults.baseURL = "https://6203af0f4d21c200170b9f5a.mockapi.io/api/v1/";

export const fetchContact = () => (dispatch) => {
  dispatch(actions.fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactError(error)));
};

export  const addContact = ({newName, number}) => (dispatch) => {
  const contact = {
     newName, number
   };

  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => {
      dispatch(actions.addContactSuccess(data))
    })
    .catch((error) => dispatch(actions.addContactError(error)));
};

export  const onDeleted = (contactId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(actions.deleteContactError(error)));
};

