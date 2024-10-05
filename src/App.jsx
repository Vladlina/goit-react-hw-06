import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleSearch = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <h1 style={{ marginBottom: "12px", color: "black" }}>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={search} onSearch={handleSearch} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
