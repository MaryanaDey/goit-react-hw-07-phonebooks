export const getContactList = (state) => state.phonebook.contacts;
export const getContactFilter = ( state ) => state.phonebook.filter;

export const getFilterContacts = state => {
  const contacts = getContactList(state);
  const filter =  getContactFilter(state);
  const normalizedFilter = filter;
  return contacts.filter(contact =>
    contact.nick.toLowerCase().includes(normalizedFilter)
  );
};
